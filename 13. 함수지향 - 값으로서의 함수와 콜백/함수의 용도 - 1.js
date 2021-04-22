// 값으로서의 함수
function a() {};

var a = function(){};

var a = {
    b:function() {

    }
};

// 다른 함수의 인자로 전달

function cal (func, num) {
    return func(num);
};

function increase(num) {
    return num + 1;
};

function decrease(num) {
    return num - 1;
};

console.log(cal(increase, 1)); // 2
console.log(cal(decrease, 1)); // 0