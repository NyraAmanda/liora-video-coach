export function initAdminCommunity({ request, logout }) {
  const page = document.getElementById('admin-community');
  if (!page) return { activate() {} };
  const $ = name => page.querySelector(`[data-community-${name}]`);
  let active = false, ready = false, loading = false, templates = [], drafts = [], current = null, variant = 0, baseline = '', busy = false, epoch = 0;
  const status = text => { $('status').textContent = text; };
  const settings = () => Object.fromEntries(['topic','focus','deadline','link','note'].map(k => [k, $(k).value.trim()]));
  const dirty = () => baseline && baseline !== text();
  const text = () => $('title').value + '\n\n' + $('body').value;
  function renderDrafts() {
    $('drafts').replaceChildren(); $('count').textContent = String(drafts.length);
    if (!drafts.length) { $('drafts').textContent = 'Deine gespeicherten Beiträge erscheinen hier.'; return; }
    for (const d of drafts) {
      const row = document.createElement('article'); row.className = 'community-draft';
      const heading = document.createElement('h3'); heading.textContent = d.title;
      const date = document.createElement('p'); date.className = 'hint'; date.textContent = new Date(d.updated_at).toLocaleString('de-CH');
      const controls = document.createElement('div'); controls.className = 'community-actions';
      for (const [label, fn] of [['Öffnen', () => open(d)], ['Entfernen', () => remove(d)]]) {
        const button = document.createElement('button'); button.type = 'button'; button.className = 'secondary'; button.textContent = label; button.onclick = fn; controls.append(button);
      }
      row.append(heading,date,controls); $('drafts').append(row);
    }
  }
  function setBusy(value) { busy = value; for (const name of ['generate','vary','save','refresh']) $(name).disabled = value || !ready; }
  function hideOutput() { $('result').hidden = true; $('title').value = ''; $('body').value = ''; baseline = ''; current = null; }
  function applySettings(data = {}) { for (const name of ['topic','focus','deadline','link','note']) if (typeof data[name] === 'string') $(name).value = data[name]; }
  function open(d) {
    if (busy || (dirty() && !confirm('Ungespeicherte Änderungen verwerfen und diesen Beitrag öffnen?'))) return;
    applySettings(d.settings); updateHint(); $('title').value = d.title; $('body').value = d.body; current = d; baseline = text(); $('result').hidden = false; $('variant').textContent = 'Gespeicherter Beitrag'; status('Entwurf geöffnet.');
  }
  function generate(next = false) {
    if (!ready || busy || !$('form').reportValidity()) return;
    const p = settings(); if (p.link) { try { const u = new URL(p.link); if(u.protocol !== 'https:' || u.username || u.password) throw Error(); } catch { status('Bitte verwende einen vollständigen HTTPS-Link oder lass das Feld leer.'); return; } }
    if (dirty() && !confirm('Deine Änderungen durch die neue Vorlage ersetzen? Speichere sie bei Bedarf zuerst.')) return;
    const template = templates.find(t => t.id === p.topic); if (!template) return;
    variant = next ? (variant + 1) % template.variants.length : 0;
    const item = template.variants[variant]; const values = { focus: p.focus || template.defaultFocus };
    const fill = value => value.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || '');
    $('title').value = fill(item.title);
    $('body').value = fill(item.body) + (p.deadline ? '\n\nWenn du mitmachen möchtest: ' + p.deadline : '') + (p.link ? '\n\nHier geht’s zum passenden Bereich:\n' + p.link : '') + (p.note ? '\n\n' + p.note : '');
    current = null; baseline = text(); $('result').hidden = false; $('variant').textContent = `Variante ${variant + 1} von ${template.variants.length}`; status('Dein Beitrag ist bereit. Du kannst ihn direkt anpassen.');
  }
  async function load() {
    if (loading) return; const run = epoch; loading = true; setBusy(true); status('Deine Community-Vorlagen werden geladen …');
    try {
      const data = await request('/admin/community/list'); if (run !== epoch) return;
      if (!Array.isArray(data.templates) || !data.templates.length || !Array.isArray(data.drafts)) throw Error('Community-Vorlagen sind gerade nicht verfügbar.');
      templates = data.templates; drafts = data.drafts; const previous = $('topic').value; $('topic').replaceChildren();
      for (const t of templates) { const option = document.createElement('option'); option.value = t.id; option.textContent = t.label; $('topic').append(option); }
      if (templates.some(t => t.id === previous)) $('topic').value = previous;
      ready = true; updateHint(); renderDrafts(); status('24 vorbereitete Beiträge · Entwürfe werden privat in Supabase gespeichert.');
    } catch (error) { if(run === epoch) { ready = false; status(error.message || 'Community-Bereich konnte nicht geladen werden.'); } }
    finally { loading = false; if(run === epoch) setBusy(false); }
  }
  async function save() {
    if (!ready || busy || !$('body').value.trim() || !$('title').value.trim()) return;
    if (!current && drafts.length >= 100) { status('Du hast 100 Entwürfe. Entferne zuerst einen alten Beitrag.'); return; }
    const draft = { id: current?.id || crypto.randomUUID(), title: $('title').value.trim(), body: $('body').value.trim(), settings: settings(), revision: current?.revision ?? null };
    const run = epoch; setBusy(true);
    try { const result = await request('/admin/community/save', { draft }); if (run !== epoch) return; current = result.draft; drafts = [current,...drafts.filter(d => d.id !== current.id)]; baseline = text(); renderDrafts(); status('In deinem privaten Adminbereich gespeichert.'); }
    catch (error) { if(run === epoch) status(error.message || 'Speichern fehlgeschlagen.'); }
    finally { if(run === epoch) setBusy(false); }
  }
  async function remove(d) {
    if (!ready || busy || !confirm('Diesen Beitrag aus deinen Entwürfen entfernen?')) return;
    const run = epoch; setBusy(true);
    try { await request('/admin/community/remove', { id:d.id, revision:d.revision }); if(run !== epoch)return; drafts = drafts.filter(x => x.id !== d.id); if(current?.id === d.id)current = null; renderDrafts(); status('Entwurf entfernt.'); }
    catch(error) { if(run === epoch)status(error.message || 'Entwurf konnte nicht entfernt werden.'); }
    finally { if(run === epoch)setBusy(false); }
  }
  function updateHint() { const t = templates.find(t => t.id === $('topic').value); $('hint').textContent = t?.hint || ''; $('focus').placeholder = t?.defaultFocus || ''; }
  function show() {
    if (!active) { page.hidden = true; return; }
    const visible = location.hash === '#admin-community'; page.hidden = !visible;
    if (visible) {
      document.getElementById('customer-admin').hidden = true;
      document.getElementById('admin-feedback').hidden = true;
      if (!ready && !loading) load();
    }
  }
  $('form').onsubmit = event => { event.preventDefault(); generate(); };
  $('topic').onchange = () => { variant = 0; updateHint(); };
  $('vary').onclick = () => generate(true); $('save').onclick = save;
  $('refresh').onclick = () => { if(!busy && (!dirty() || confirm('Vorlagen und Entwurfsliste neu laden? Dein bearbeiteter Text bleibt erhalten.'))) load(); };
  $('copy').onclick = async () => { try { await navigator.clipboard.writeText(text()); status('Titel und Beitrag kopiert. Du kannst beides jetzt in Skool einfügen.'); } catch { status('Kopieren ist hier nicht verfügbar. Markiere Titel und Beitrag zum manuellen Kopieren.'); } };
  $('logout').onclick = () => logout().catch(error => status(error.message));
  window.addEventListener('hashchange',show);
  window.addEventListener('storage', event => { if(event.key === 'liora-video-coach:remembered-session' && event.newValue === null) { epoch++; active = ready = false; templates = drafts = []; hideOutput(); page.hidden = true; } });
  setBusy(false);
  return { activate() { active = true; show(); } };
}
