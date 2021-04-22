/*
- pattern 에 i를 붙일 경우 대소문자를 구분하지 않음
- pattern 에 g를 붙일 경우 패턴에 대한 모든 내용 리턴 그렇지 않을 경우 하나만 리턴
*/

var str = 'Abcd';

var pattern1 = /a/;
console.log(str.match(pattern1)); // null

var pattern2 = /a/i;
console.log(str.match(pattern2)); // [ 'A', index: 0, input: 'Abcd', groups: undefined ]

var str = 'abcda';

var pattern1 = /a/;
console.log(str.match(pattern1)); // [ 'a', index: 0, input: 'abcda', groups: undefined ]

var pattern2 = /a/g;
console.log(str.match(pattern2)); // [ 'a', 'a' ]

var str = 'AabcdaA';

var pattern1 = /a/ig;
console.log(str.match(pattern1)); // [ 'A', 'a', 'a', 'A' ]