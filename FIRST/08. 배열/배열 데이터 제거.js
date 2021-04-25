/*
- shift 가장 앞에 있는 데이터 제거
- pop 가장 뒤에 있는 데이터 제거
*/

var li = ['a', 'b', 'c', 'd', 'e'];
console.log(li); // [ 'a', 'b', 'c', 'd', 'e' ]

li.shift(); 
console.log(li); // [ 'b', 'c', 'd', 'e' ]

li.pop();
console.log(li); // [ 'b', 'c', 'd' ]