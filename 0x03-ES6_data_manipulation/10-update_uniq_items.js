export default function updateUniqueItems(map) {
  if (!Map.isMap(map)) {
    return new Error('Cannot process');
  }
  for (const [k, v] of map) {
    if (v === 1) {
      map.set(k, 100);
    }
  }
  return map;
}
