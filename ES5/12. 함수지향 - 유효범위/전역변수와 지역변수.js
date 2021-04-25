/*
- function 안에서 var 사용 하여 변수를 만들지 않을 경우 전역변수 사용.
*/

var vscope = 'global';
function fscope1(){
    var vscope = 'local';
    console.log('함수안 '+vscope);
}

function fscope2(){
    console.log('함수안 '+vscope);
}

fscope1(); // local
fscope2(); // global
console.log('함수밖 '+vscope); // global
