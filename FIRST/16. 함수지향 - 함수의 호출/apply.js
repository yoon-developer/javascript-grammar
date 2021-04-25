function sum(arg1, arg2) {
    return arg1 + arg2;
}

console.log(sum(1,2)); // 3
// null 을 사용 할경우 apply 사용이 좋지 않음
console.log(sum.apply(null, [1, 2])); // 3