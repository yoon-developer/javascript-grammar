var members = ['yoondev01', 'yoondev02', 'yoondev03'];

console.log(members); // [ 'yoondev01', 'yoondev02', 'yoondev03' ]
console.log(members[0]); // yoondev01
console.log(members[1]); // yoondev02
console.log(members[2]); // yoondev03

// 함수 사용
function get_members() {
    return ['member01', 'member02', 'member03'];
}

var members = get_members();
console.log(members); // [ 'member01', 'member02', 'member03' ]
console.log(members[0]); // member01
console.log(members[1]); // member02
console.log(members[2]); // member03