var a = 1;
function func1(b){
    b = 2;
}
func1(a);
console.log(a); // 1

var a = {'id':1};
function func2(b){
    b = {'id':2};
}
func2(a);
console.log(a.id); // 1

var a = {'id':1};
function func3(b){
    b.id = 2;
}
func3(a);
console.log(a.id); // 2