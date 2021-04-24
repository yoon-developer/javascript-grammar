/*
- o -> Sub.prototype.ultraProp -> Super.prototype.ultraProp -> Ultra.prototype.ultraProp 방식으로 찾음
*/

function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
/*
var t = new Ultra();
t.ultraProp = 3;
Super.prototype = t;
*/
Super.prototype = new Ultra();
 
function Sub(){}
// Sub.prototype.ultraProp = 2;
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o); // Ultra {}
console.log(o.ultraProp); // true

o.ultraProp = 1;
console.log(o.ultraProp); // 1