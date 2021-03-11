/* eslint-disable linebreak-style */
/* eslint-disable max-len */
export default function orderByProps(obj, rule) {
  let MechnikSort = [];
  for (const prop in obj) {
    if (rule.indexOf(prop, 0) >= 0) {
      MechnikSort.splice(rule.indexOf(prop, 0), 0, { key: `${prop}`, value: `${obj[prop]}` });
    } else { MechnikSort.push({ key: `${prop}`, value: `${obj[prop]}` }); }
  }
  MechnikSort = MechnikSort.slice(0, rule.length).concat(MechnikSort.slice(rule.length).sort((a, b) => a.key.localeCompare(b.key)));
  return MechnikSort;
}
