/*
- 자바스크립트는 함수가 선언된 시점에서의 유효범위를 가짐
*/

var i = 5;

function a() {
    var i = 10;
    b();
}

function b() {
    console.log(i); // 5
}

a();