// 외부 함수
function outter() {
    // 내부 함수
    function inner() {
        var title = 'coding everybody';
        console.log(title);
    }

    inner();
}

outter(); // coding everybody