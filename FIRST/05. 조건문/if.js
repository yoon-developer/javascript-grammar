/*
- 0은 False
- 1은 True
- 빈문자열은 False
- undefined은 False
- 값이 할당되지 않을 경우 False
- null은 False
- NaN은 False
*/


if (0) { // 
    console.log(1)
}

if (1) { // 2
    console.log(2)
}


if (!'') { // 빈 문자열
    console.log('빈 문자열')
}

if (undefined) { //
    console.log('undefined')
}

var a;
if (!a) { // 값이할당되지 않은 변수
    console.log('값이 할당되지 않은 변수')
}

if (!null) { // null
    console.log('null')
}

if (!NaN) { // null
    console.log('null')
}