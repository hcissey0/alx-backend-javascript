export const weakMap = new WeakMap();
export function queryAPI(endPoint) {
  let count = weakMap.get(endPoint);
  count = count ? count + 1 : 1;
  weakMap.set(endPoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
