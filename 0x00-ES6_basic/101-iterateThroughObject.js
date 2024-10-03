export default function iterateThroughObject(iter) {
  let names = '';
  for (const name of iter) {
    names += name + ' | ';
  }
  return names.slice(0, -3); // Remove trailing ' | '
}

