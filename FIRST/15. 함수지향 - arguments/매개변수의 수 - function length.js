function zero(){
    console.log(
        'zero.length', zero.length, '/',
        'arguments', arguments.length
    );
}

zero(); // zero.length 0 arguments 0 

function one(arg1){
    console.log(
        'value1', arg1, '/',
        'one.length', one.length, '/',
        'arguments', arguments.length
    );
}

one('val1', 'val2');  // one.length 1 arguments 2 

function two(arg1, arg2){
    console.log(
        'value1', arg1, '/',
        'value2', arg2, '/',
        'two.length', two.length, '/',
        'arguments', arguments.length
    );
}

two('val1');  // two.length 2 arguments 1