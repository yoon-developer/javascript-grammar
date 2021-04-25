/*
- pattern.exec는 pattren 정보를 통해 내용 추출
- pattern.test는 존재 여부를 확인하여 boolean 타입으로 리턴
*/

var pattern = new RegExp('bc');
console.log(pattern.exec('abcde')); // [ 'bc', index: 1, input: 'abcde', groups: undefined ]
console.log(pattern.test('abcde')); // true

console.log(pattern.exec('acde')); // null
console.log(pattern.test('acde')); // false


// . 어떤 문자여도 상관 없음
var pattern = new RegExp('b.');
console.log(pattern.exec('abdc')); // [ 'bd', index: 1, input: 'abdc', groups: undefined ]
console.log(pattern.test('abdc')); // true