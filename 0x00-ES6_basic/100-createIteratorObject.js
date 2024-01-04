export default function* createIteratorObject(report) {
  const arr = [];
  // eslint-disable-next-line guard-for-in
  for (const department in report.allEmployees) {
    for (const employee of report.allEmployees[department]) {
      yield employee;
    }
  }
  return arr[Symbol.iterator]();
}
