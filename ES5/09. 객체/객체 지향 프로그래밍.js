var grades = {
    'list' : {'yoondev01': 10, 'yoondev02': 20, 'yoondev03': 30},
    'show' : function() {
        for(var name in this.list) {
            console.log("name:", name,"/","value:",this.list[name]);
        }
    }
};

console.log(grades['list']); // { yoondev01: 10, yoondev02: 20, yoondev03: 30 }
console.log(grades['list']['yoondev01']); // 10

/*
name: yoondev01 / value: 10
name: yoondev02 / value: 20
name: yoondev03 / value: 30
*/
grades.show(); // grades['show']()