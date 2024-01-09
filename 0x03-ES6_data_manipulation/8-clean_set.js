export default function cleanSet(set, startString) {
  return [...set]
		.filter((val) => val.startsWith(startString))
		.map((val) => val.slice(startString.length))
		.join('-');
}
