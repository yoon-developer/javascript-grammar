// ex 1)
var person1 = {}
person1.name = 'yoon1';

person1.introduce = function() {
    return 'My name is ' + this.name;
}

console.log(person1.introduce()); // My name is yoon1

// ex 2)
var person2 = {
    'name' : 'yoon2',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}

console.log(person2.introduce()); // My name is yoon2