o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    console.log(this); // this 는 o1, o2 를 의미함 (var this = o1)
    for(value in this){
        _sum += this[value];
    }
    return _sum;
}
console.log(sum.apply(o1)) // 6
console.log(sum.apply(o2)) // 185

o1 = {val1:1, val2:2, val3:3, sum:sum2};
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum2};

function sum2(){
    var _sum = 0;
    for(value in this){
        if (typeof this[value] !== 'function') {
            _sum += this[value];
        }

    }
    return _sum;
}

console.log(o1.sum()); // 6
console.log(o2.sum()) // 185