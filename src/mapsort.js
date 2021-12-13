export function test_sort_map(log) {
  const myMap = new Map();
  myMap.set('a', 3);
  myMap.set('c', 4);
  myMap.set('b', 1);
  myMap.set('d', 2);

  // in order that was inserted
  log([...myMap.entries()]);

  // in reverse order that was inserted
  log([...myMap.entries()].reverse());

  // sort by value, descending
  log([...myMap.entries()].sort((a, b) => b[1] - a[1]));

  // sort by value, ascending
  log([...myMap.entries()].sort((a, b) => a[1] - b[1]));

  // sort by key, ascending
  log([...myMap.entries()].sort());

  // sort by key, ascending, controlled
  log([...myMap.entries()].sort((a, b) => a[0].localeCompare(b[0])));

  // sort by key, ascending, controlled
  log([...myMap.entries()].sort((a, b) => b[0].localeCompare(a[0])));
}
