/*
reference
- 기본형 타입을 제외한 모든 데이터는 참조형 타입
*/

var a = {'id':1};
var b = a;
console.log(b.id); // 1
b.id = 2;

console.log(a.id);  // 2
console.log(b.id); // 2