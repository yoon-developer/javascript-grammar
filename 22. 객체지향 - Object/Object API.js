
// Object.keys()
var arr = ["a", "b", "c"];
console.log('Object.keys(arr)', Object.keys(arr)); // [ '0', '1', '2' ]

var arr = {"name":"yoondev", "age":"29", "city":"seoul"};
console.log('Object.keys(arr)', Object.keys(arr)); // [ 'name', 'age', 'city' ]

// Object.prototype.toString()
var o = new Object();
console.log('o.toString()', o.toString()); // [object Object]

var o = [1, 2, 3];
console.log('o.toString()', o.toString()); // 1,2,3

var a = new Array(1, 2, 3);
console.log('a.toString()', a.toString); // [Function: toString]