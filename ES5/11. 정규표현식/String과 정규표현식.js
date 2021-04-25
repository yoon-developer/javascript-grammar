/*
- str.replace는 패턴을 검색하서 내용 변경하여 리턴
*/

var str = 'abcd';

var pattern = new RegExp('bc');
console.log(str.match(pattern)); // [ 'bc', index: 1, input: 'abcd', groups: undefined ]

var pattern = new RegExp('ef');
console.log(str.match(pattern)); // null

var pattern = new RegExp('ab');
console.log(str.replace(pattern, 'ABC')); // ABCcd