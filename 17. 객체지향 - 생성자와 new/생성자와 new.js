// ex 1) name 을 바꾸기 위해 중복 코드 발생

function Person1(){}
var p1 = new Person1();
p1.name = 'yoon1';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p1.introduce());

// ex 2) name 을 바꾸기 위해 중복 코드 발생
function Person2(){}
var p2 = new Person2();
p2.name = 'yoon2';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p2.introduce());


// ex 3)
function Person3(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}

var p3 = new Person3('yoon3');
console.log(p3.introduce());
 
var p3 = new Person3('yoon4');
console.log(p3.introduce());