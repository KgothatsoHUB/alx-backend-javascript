export default function createIteratorObject(r) {
  const empArray = [];

  for (const dept in r.allEmployees) {
    empArray.push(...r.allEmployees[dept]);
  }

  return empArray[Symbol.iterator]();
}

