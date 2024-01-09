export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const v = new DataView(buf);
  v.setInt8(position, value);
  return v;
}
