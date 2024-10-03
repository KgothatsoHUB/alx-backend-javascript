export default function createReportObject(empList) {
  return {
    allEmployees: empList,
    getNumberOfDepartments() {
      return Object.keys(empList).length;
    },
  };
}

