import {test} from 'node:test';
import assert from 'node:assert/strict';
import {entitlement,findEntitlement,listEntitlements,withTentary,PRODUCT_ID} from './tentary.mjs';
const now=Date.parse('2026-11-28T12:00:00Z');
const email='buyer@example.com';
function order(patch={}){return {id:12,buyer_data:{email},product:{id:PRODUCT_ID},status:'paid',refund:'none',billing:'subscription',has_access:true,chargeback:false,subscription:{status:'active',interval_months:1,ends_at:null,payments:[{created_at:'2026-11-20T13:20:00Z',status:'paid',amount:'9.90',refunded_amount:'0',chargeback:false}]},...patch};}
test('paid subscription has one month, normalized exact identity',()=>{
 assert.equal(entitlement(order(),' Buyer@Example.com ',now).paidUntil,'2026-12-20T13:20:00.000Z');
 assert.equal(entitlement(order(),'other@example.com',now),null);
});
for(const [name,patch] of Object.entries({unpaid:{status:'pending'},wrongProduct:{product:{id:360423}},oneTime:{billing:'one_time'},fullRefund:{refund:'full'},chargeback:{chargeback:true},removedAccess:{has_access:false},futureStart:{access_starts_at:'2027-01-01T00:00:00Z'},expired:{access_ends_at:'2026-11-21T00:00:00Z'},missingPlan:{subscription:null}}))test(name,()=>assert.equal(entitlement(order(patch),email,now),null));
test('cancelled subscription lasts until actual end, not a new month',()=>{
 const o=order();o.subscription.status='cancelled';o.subscription.ends_at='2026-12-01T00:00:00Z';
 assert.deepEqual(entitlement(o,email,now),{orderId:12,paidUntil:'2026-12-01T00:00:00.000Z',cancelAtPeriodEnd:true});
 assert.equal(entitlement(o,email,Date.parse('2026-12-01T00:00:00Z')),null);
});
test('payment dates clamp at calendar month end',()=>{
 const o=order();o.subscription.payments[0].created_at='2027-01-31T13:20:00Z';
 assert.equal(entitlement(o,email,Date.parse('2027-02-01')).paidUntil,'2027-02-28T13:20:00.000Z');
});
test('refunded latest payment cannot fall back to an older payment',()=>{
 const o=order();o.subscription.payments.push({created_at:'2026-11-25T00:00:00Z',status:'paid',amount:'9.90',refunded_amount:'9.90'});
 assert.equal(entitlement(o,email,now),null);
});
test('failed renewal never extends expired last paid period',()=>{
 const o=order();o.subscription.payments[0].created_at='2026-10-20T00:00:00Z';
 o.subscription.payments.push({created_at:'2026-11-20T00:00:00Z',status:'failed',amount:'9.90'});
 assert.equal(entitlement(o,email,now),null);
});
test('pagination, exact email, exact product and detail identity checked',async()=>{
 const calls=[];let count=0;
 const fetcher=async(url,opts)=>{calls.push(url);assert.equal(opts.redirect,'error');assert.equal(opts.headers.Authorization,'Bearer test');
 return {ok:true,json:async()=>++count===1?{orders:[{id:2,buyer_data:{email:'x'+email},product:{id:PRODUCT_ID}}],next_cursor:'two'}:count===2?{orders:[order()],next_cursor:null}:order()};};
 assert.equal((await findEntitlement(email,'test',fetcher,now)).orderId,12);
 assert.equal(calls.length,3); assert.ok(calls[1].includes('cursor=two'));
 assert.ok(calls[0].includes('product_id=360594'));
});
test('invalid/incomplete pagination does not revoke a good cache',async()=>{
 await assert.rejects(findEntitlement(email,'test',async()=>({ok:true,json:async()=>({orders:[],next_cursor:'repeat'})}),now),/cursor/);
});
test('API auth error throws without reflecting response body or key',async()=>{
 await assert.rejects(findEntitlement(email,'secret',async()=>({ok:false,status:401}),now),/^Error: tentary_http_401$/);
});
test('blocked, unlimited and unused course month skip the external service',async()=>{
 for(const row of [{enabled:false},{enabled:true,billing_override:true},{enabled:true,trial_eligible:true,trial_started_at:null}]){
 let calls=0;const pool={query:async()=>({rows:[row]})};
 const store={signIn:async()=>true}; const adapted=withTentary(store,pool,{key:'test',fetcher:async()=>{calls++;throw Error();}});
 await adapted.signIn(email,{kind:'session'});assert.equal(calls,0);
 }
});
test('new paid app member gets no trial; conflicts preserve manual and course fields',async()=>{
 const queries=[];const current=order();current.subscription.payments[0].created_at=new Date().toISOString();
 const pool={query:async(sql,params)=>{queries.push({sql,params});return {rows:[],rowCount:0};}};
 pool.connect=async()=>({...pool,release(){}});
 const adapted=withTentary({signIn:async()=>true},pool,{key:'test',fetcher:async url=>({ok:true,json:async()=>url.includes('/12')?current:{orders:[current],next_cursor:null}})});
 await adapted.signIn(email,{kind:'session'});
 const write=queries.find(q=>q.sql.includes('INSERT INTO'));
 assert.ok(write);assert.ok(write.sql.includes('SELECT $1,true,false,false,false,'));
 const update=queries.find(q=>q.sql.startsWith('UPDATE')).sql;
 for(const field of ['enabled','trial_eligible','trial_started_at','trial_until','course_member','billing_override']) assert.ok(!update.includes(field+'='));
});
test('session refresh cannot look up another credential type',async()=>{
 const queries=[];const pool={query:async(sql,params)=>{queries.push({sql,params});return {rows:[]};}};
 let delegated=false;const adapter=withTentary({credential:async(hash,kind)=>{delegated=true;assert.equal(kind,'session');}},pool,{key:'test'});
 await adapter.credential('hash','session');assert.ok(delegated);assert.deepEqual(queries[0].params,['hash','session']);assert.ok(queries[0].sql.includes('expires_at>now()'));
});
test('administrator snapshot discovers new purchases and groups duplicate e-mails',async()=>{
 const a=order(),b=order({id:13}),refund=order({id:14,buyer_data:{email:'refunded@example.com'},refund:'full',has_access:false});
 b.buyer_data.email=' BUYER@EXAMPLE.COM ';b.subscription={...a.subscription,ends_at:'2026-12-01T00:00:00Z'};
 const result=await listEntitlements('test',async url=>({ok:true,json:async()=>url.includes('/12')?a:url.includes('/13')?b:{orders:[a,b,refund],next_cursor:null}}),now);
 assert.equal(result.size,2);assert.equal(result.get(email).orderId,12);assert.equal(result.get('refunded@example.com'),null);
});
test('administrator snapshot rejects incomplete API pages',async()=>{
 await assert.rejects(listEntitlements('test',async()=>({ok:true,json:async()=>({orders:[],next_cursor:'repeated'})}),now),/cursor/);
});
test('admin list imports new paid account before its first login and reports status',async()=>{
 const queries=[];const current=order();current.subscription.payments[0].created_at=new Date().toISOString();
 const pool={query:async(sql,params)=>{queries.push({sql,params});return {rows:[],rowCount:0};}};
 pool.connect=async()=>({...pool,release(){}});
 const adapter=withTentary({list:async()=>[]},pool,{key:'test',fetcher:async url=>({ok:true,json:async()=>url.includes('/12')?current:{orders:[current],next_cursor:null}})});
 await adapter.list();assert.ok(queries.some(q=>q.sql.includes('INSERT INTO')));assert.ok(queries.some(q=>q.sql==='COMMIT'));
 assert.equal(adapter.billingSyncInfo().state,'connected');assert.ok(adapter.billingSyncInfo().checkedAt);
 assert.ok(!queries.some(q=>q.sql.includes('SET enabled')));
});
test('incomplete admin verification performs no billing writes',async()=>{
 const queries=[];let calls=0;
 const pool={query:async(sql)=>{queries.push(sql);return {rows:[]};}};
 const adapter=withTentary({list:async()=>[]},pool,{key:'test',fetcher:async()=>({ok:true,json:async()=>++calls===1?{orders:[],next_cursor:'next'}:{orders:null}})});
 await adapter.list();assert.equal(adapter.billingSyncInfo().state,'unavailable');assert.ok(queries.every(sql=>!sql.startsWith('UPDATE')&&!sql.startsWith('INSERT')));
});
test('successful empty snapshot clears old entitlement while retaining account identity',async()=>{
 const queries=[];
 const pool={query:async(sql,params)=>{queries.push({sql,params});return {rows:sql==='SELECT email FROM liora_lab_access.access_members WHERE tentary_order_id IS NOT NULL'?[{email}]:[],rowCount:1};}};
 pool.connect=async()=>({...pool,release(){}});
 const adapter=withTentary({list:async()=>[]},pool,{key:'test',fetcher:async()=>({ok:true,json:async()=>({orders:[],next_cursor:null})})});
 await adapter.list();const write=queries.find(q=>q.sql.startsWith('UPDATE'));
 assert.deepEqual(write.params,[email,null,null,false]);assert.ok(write.sql.includes('coalesce($3,tentary_order_id)'));assert.ok(!queries.some(q=>q.sql.startsWith('DELETE')));
});
