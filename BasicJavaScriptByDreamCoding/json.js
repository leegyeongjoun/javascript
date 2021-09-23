'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);                  // true

json = JSON.stringify(['apple', 'banana']);
console.log(json);                  // ["apple", "banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);                  // {"name":"tori","color":"white","size":null,"birthDate":"2021-09-23T06:12:44.150Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);                  // {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  /** key: , value: [object Object]
   *  key: name, value: tori
   *  key: color, value: white
   *  key: size, value: null
   *  key: birthDate, value: 2021-09-23T06:13:43.085Z
   *  key: jump, value: function () {console.log(`${this.name} can jump!`); }
   */
  return key === 'name' ? 'ellie' : value;
});
console.log(json);                  // {"name":"ellie","color":"white","size":null,"birthDate":"2021-09-23T06:13:43.085Z"}


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);                  // {"name":"tori","color":"white","size":null,"birthDate":"2021-09-23T06:16:29.069Z"}
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  /** key: name, value: tori
   *  key: color, value: white
   *  key: size, value: null
   *  key: birthDate, value: 2021-09-23T06:16:29.069Z
   *  key: , value: [object Object]
   */
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);                   // {name: 'tori', color: 'white', size: null, birthDate: Thu Sep 23 2021 15:17:45 GMT+0900 (한국 표준시)}
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());                    // 23 (today is 9/23)
console.log(obj.birthDate.getDate());                   // 23 (today is 9/23)
