export default function appendToEachArrayValue(arr, str) {
  for (const val of arr) {
    arr[arr.indexOf(val)] = str + val;
  }
  return arr;
}

