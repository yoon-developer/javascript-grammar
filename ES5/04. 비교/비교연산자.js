/* 동등 연산자
== (equal operator) - 정보가 동일 할 경우 True
=== (strict equal operator) - 정보와 데이터 형식도 동일 할 경우 True
*/


// ==
console.log(1 == 2); // false
console.log("one" == "two"); // false

console.log(1 == '1'); // true
console.log(null == undefined); // true
console.log(true == 1); // true
console.log(true == '1'); // true


// ===
console.log(0 === -0); // true

console.log(1 === '1'); // false
console.log(NaN == NaN); // false
console.log(null === undefined); // false
console.log(true === 1) // false
console.log(true === '1'); // false


