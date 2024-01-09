export default function updateUniqueItems(map) {
  try {
    for (const [k, v] of map) {
      if (v === 1) {
        map.set(k, 100);
      }
    }
    return map;
  } catch (e) {
    throw new Error('Cannot process');
  }
}
