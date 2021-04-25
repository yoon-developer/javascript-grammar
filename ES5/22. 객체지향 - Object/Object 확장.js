Object.prototype.contain = function(needle) {
    for(var name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
};

var o = {"name":"yoondev", "age":"29", "city":"seoul"};
console.log(o.contain('yoondev')); // true

var arr1 = ['yoondev1', 'yoondev2', 'yoondev3'];
console.log(arr1.contain('yoondev3')); // true

var arr2 = ['dev1', 'dev2', 'dev3'];
console.log(arr2.contain('yoondev3')); // false