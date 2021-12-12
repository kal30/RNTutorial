function emptyIncomingList(list) {
  list = [];
}

function concatList(list) {
  list.concat(3, 4);
}

function modifyIncomingList(list) {
  list[1].name = 'Jane';
}

function pushList(list) {
  list.push(7, 9);
}

function test_scope_const(log) {
  log('test_scope_const');
  const items = [
    {foo: 1, bar: 2, goo: 3},
    {name: 'Joe', age: 10},
  ];
  log('Declaring a list of deep items');
  log(items);
  log('calling emptyIncomingList');
  emptyIncomingList(items);
  log(items);
  log('calling appendIncomingList');
  concatList(items);
  log(items);
  log('calling modifyIncomingList');
  modifyIncomingList(items);
  log(items);
  log('calling pushList');
  pushList(items);
  log(items);
}

// Functions do not modify input arguments, even arrays of objects

function test_scope_let(log) {
  log('test_scope_let');
  let items = [
    {foo: 1, bar: 2, goo: 3},
    {name: 'Joe', age: 10},
  ];
  log('Declaring a list of deep items');
  log(items);
  log('calling emptyIncomingList');
  emptyIncomingList(items);
  log(items);
  log('calling appendIncomingList');
  concatList(items);
  log(items);
  log('calling modifyIncomingList');
  modifyIncomingList(items);
  log(items);
  log('calling pushList');
  pushList(items);
  log(items);
}

export function test_scope_bad(log) {
  log('yo');
  test_scope_const(log);
  test_scope_let(log);
}
