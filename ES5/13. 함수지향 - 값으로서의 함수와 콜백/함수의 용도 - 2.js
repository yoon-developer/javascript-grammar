function cal(mode) {
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    }

    return funcs[mode];
}

console.log(cal('plus')(2, 1)); // 3
console.log(cal('minus')(2, 1)); // 1


var process = [
    function(input) {return input + 10;},
    function(input) {return input * input;},
    function(input) {return input / 2;}
];

var input = 1;

for(var i = 0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input); 60.5