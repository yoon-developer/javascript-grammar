function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    console.log("this:", this) // this: Person { name: 'xxx' }
    return 'My nickname is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "Programmer";
}

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function(){
    return "Designer";
}
 
var p1 = new Programmer('yoon1');
console.log(p1.introduce()); // My nickname is yoon1
console.log(p1.coding()); // Programmer

var p2 = new Designer('yoon2');
console.log(p2.introduce()); // My nickname is yoon2
console.log(p2.design()); // Designer