export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let res = '';
  for (const i of set) {
    if (i.startsWith(startString)) {
      if (res !== '') {
        res += '-';
      }
      res += i.slice(startString.length);
    }
  }
  return res;
}
