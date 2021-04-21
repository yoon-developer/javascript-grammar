var grades = {'yoondev01': 10, 'yoondev02': 20, 'yoondev03': 30};

console.log("type: " + typeof grades); // object
console.log(grades); // { yoondev01: 10, yoondev02: 20, yoondev03: 30 }
console.log(grades['yoondev01']); // 10
console.log(grades.yoondev01); // 10

var members = {};
members['member01'] = 'memberId01';
members['member02'] = 'memberId02';
members['member03'] = 'memberId03';

console.log(members); // { member01: 'memberId01', member02: 'memberId02', member03: 'memberId03' }
console.log(members['member02']); // memberId02
console.log(members.member02); // memberId02

var users = new Object();
users['user01'] = 'userId01';
users['user02'] = 'userId02';
users['user03'] = 'userId03';

console.log(users); // { user01: 'userId01', user02: 'userId02', user03: 'userId03' }
console.log(users['user03']); // userId03
console.log(users.user03); // userId03

