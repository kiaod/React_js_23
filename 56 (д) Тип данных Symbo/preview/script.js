'use strict';
const obj = {
  'name': 'Test',
  [Symbol('id')]: 1
}

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id == id);

// obj[id] = 1;

console.log(obj);

for (let value in obj) console.log(value);