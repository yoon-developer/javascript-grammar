// 변수 사용 전
console.log(100 + 10); // 110

console.log((100 + 10) / 10); // 11

console.log(((100 + 10) / 10) - 10); // 1

console.log((((100 + 10) / 10) - 10) * 10); // 10

// 변수 사용 후
var a = 100;
a = a + 10;
console.log(a) // 110

a = a / 10;
console.log(a) // 11

a = a - 10;
console.log(a) // 1

a = a * 10;
console.log(a) // 10

