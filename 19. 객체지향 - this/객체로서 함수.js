/*
- 함수 리터럴: 문법으로 작성해서 자바스크립스 해석기에 제출하면 함수 객체를 생성
*/
function sum(x, y) {return x + y};
console.log(sum(1, 2));


var sum2 = new Function('x', 'y', 'return x + y');
console.log(sum2(1, 2));