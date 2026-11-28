// Presentation only: access decisions remain on the server.
export function memberBillingState(member, now=Date.now()) {
  const knownTentary=Object.hasOwn(member,'tentaryPaidUntil');
  const fresh=Date.parse(member.tentaryCheckedAt)>now-900000;
  const paid=knownTentary&&fresh&&Date.parse(member.tentaryPaidUntil)>now;
  const free=member.trialEligible&&(!member.trialStartedAt||Date.parse(member.trialUntil)>now);
  const expired=!member.unlimited&&!paid&&!free&&((member.trialUntil&&Date.parse(member.trialUntil)<=now)||knownTentary);
  return {knownTentary,paid,expired,state:!member.enabled?'blocked':expired?'expired':'enabled',
    label:!member.enabled?'Gesperrt':member.unlimited?'Dauerzugang':paid?'Abo aktiv':free?'Gratiszugang':expired?'Zugang abgelaufen':'Freigegeben'};
}
