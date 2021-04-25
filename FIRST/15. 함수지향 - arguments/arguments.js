function sum(){
    var _sum = 0;
    console.log(arguments) // { '0': 4, '1': 3, '2': 2, '3': 1 }
    for(var i = 0; i < arguments.length; i++){
        console.log(i+' : '+arguments[i]);
        _sum += arguments[i];
    }   
    return _sum;
}
console.log('result : ' + sum(4,3,2,1)); // 10