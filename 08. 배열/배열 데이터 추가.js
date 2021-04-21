/*
- push는 하나의 데이터를 추가
- concat는 여러개의 데이터를 추가
- unshift는 가장 앞에 데이터를 추가
- splice 특정 index 에 데이터 추가
  > li.splice(2,  3, '5', '10');
    2번째 인덱스에서 3개의 데이터를 지우고 '5' '10'을 추가
*/

var li = ['a', 'b'];
console.log(li); // [ 'a', 'b']

li.push('c');
console.log(li); // [ 'a', 'b', 'c' ]

li = li.concat(['d', 'e']);
console.log(li); // [ 'a', 'b', 'c', 'd', 'e' ]

li.unshift('0');
console.log(li) // [ '0', 'a', 'b', 'c', 'd', 'e' ]

li.splice(2,  0, '3', '5');
console.log(li) // [ '0', 'a', '3', '5', 'b', 'c', 'd', 'e' ]

li.splice(4,  3, '7', '10');
console.log(li) // [ '0', 'a', '3', '5', '7', '10', 'e' ]