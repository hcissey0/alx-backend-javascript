export default function cleanSet(set, startString) {
  if (!startString || !set) return '';
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  return startString !== ''
    ? [...set]
      .filter((val) => val.startsWith(startString))
      .map((val) => val.slice(startString.length))
      .join('-')
    : '';
}
