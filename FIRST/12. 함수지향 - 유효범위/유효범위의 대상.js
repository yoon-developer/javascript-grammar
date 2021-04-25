/*
- 자바에서는 변수를 for 문 안에서 작성 하면 for 문 안에서의 유효범위는 가짐

for(var i = 0; i < 1; i++) {
    var value = 'coding everybody';
}

System.out.println(value);
*/

for(var i = 0; i < 1; i++) {
    var value = 'coding everybody';
}

console.log(value);