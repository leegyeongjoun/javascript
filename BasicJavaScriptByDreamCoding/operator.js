// 1. String concatenation
console.log('my' + ' cat');                 // my cat
console.log('1' + 2);                   // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);                   // string literals: 1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1);                 // 2 : add
console.log(1 - 1);                 // 0 : substract
console.log(1 / 1);                 // 1 : divide
console.log(1 * 1);                 // 1 : multiply
console.log(5 % 2);                 // 1 : remainder
console.log(2 ** 3);                    // 8 : exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);                  //preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);                    // postIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);                  // preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);                    // postDecrement: 3, counter: 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);                    // false : less than
console.log(10 <= 6);                   // false : less than or equal
console.log(10 > 6);                    // true : greater than
console.log(10 >= 6);                   // true : greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);                  // or: true

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);                 // and: false

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);                   // false

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);                  // true
console.log(stringFive != numberFive);                  // false

// === strict equality, no type conversion  --> type을 비교
console.log(stringFive === numberFive);                 // false
console.log(stringFive !== numberFive);                 // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);                  // false
console.log(ellie1 === ellie2);                 // false
console.log(ellie1 === ellie3);                 // true

// equality - puzzler
console.log(0 == false);                    // true
console.log(0 === false);                   // false
console.log('' == false);                   // true
console.log('' === false);                  // false
console.log(null == undefined);                 // true
console.log(null === undefined);                    // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');                   // unknown
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');                   // no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');                    // go away!
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
/* while: 3
   while: 2
   while: 1 */


// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);        // do while: 0
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
/* for: 3
   for: 2
   for: 1 */

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}
/* inline variable for : 3
   inline variable for : 1 */

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
/* i: 0, j: 0
   ~~~~~~~~
   i: 0, j: 9
   ~~~~~~~~
   i: 9, j: 9  */

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
/* q1. 1
   q1. 3
   q1. 5
   q1. 7
   q1. 9 */

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
/* a2. 0
   q2. 1
   q2. 2
   ~~~~~
   q2. 8 */
