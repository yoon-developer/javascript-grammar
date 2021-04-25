/*
- 내부함수를 포함하고 있는 외부함수가 종료되더라도 내부함수를 통해서 접근 할수 있음

*/

// 외부 함수
function outter1() {
    var title = 'coding everybody';

    // 내부 함수
    function inner1() {
        // outter1 의 title 변수 값 사용
        console.log(title);
    }

    inner1();
}

outter1(); // coding everybody

// 외부 함수
function outter2() {
    var title = 'coding everybody';

    return function() {
        console.log(title);
    }
}

inner = outter2(); 
inner(); // coding everybody