MYAPP = {}

MYAPP.calculator = {
    'left' : null,
    'right' : null
}

MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

console.log(MYAPP); // { calculator: { left: 10, right: 20 }, coordinate: { left: null, right: null } }

function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

console.log(sum()); // 30