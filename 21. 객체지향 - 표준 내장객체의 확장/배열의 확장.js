var arr = new Array('seoul','jesu','pusan','kangwon', 'gwangju');
function getRandomValueFromArray(haystack){
    /*
    haystack.length (최댓값) 4
    Math.random (최솟값 - 0)
    floor (버림)
    */
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arr));

// 모든 객체가 가질수 있도록 코드 변경
Array.prototype.rand = function(){
    console.log("this:", this); // [ '1', '10', '2', '9', '3', '8' ]
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('1','10','2','9', '3', '8');
console.log(arr.rand());