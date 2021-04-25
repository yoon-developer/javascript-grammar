// 모든 객체에 영향을 주는 객체에 기능을 넣으면 위험함
Object.prototype.contain = function (needle) {
    for (var name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
};

var o = { "name": "yoondev", "age": "29", "city": "seoul" };
var a = ['yoondev1', 'yoondev2', 'yoondev3'];

/* function 이 포함된다.
yoondev
29
seoul
[Function (anonymous)]
*/
for (var value in o) { 
    console.log(o[value]);
}

/* hasOwnProperty: 프로토타입 체인은 확인하지 않고, 해당 객체가 스스로 정의한 프로퍼티만을 판단
0
1
2
*/
for (var value in a) { 
    if (a.hasOwnProperty(value)) {
        console.log(value);
    }
}
