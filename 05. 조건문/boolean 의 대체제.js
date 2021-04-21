/* 
- &&는 좌항 우항이 모두 참(True) 일때 참이 됨
- ||는 좌황 우황중 하나의 참(True) 가 존재할 경우 참이 됨
*/
if (true && true) { // 1
    console.log(1);
}

if (true && false) { //
    console.log(2);
}

if (false && true) { //
    console.log(3);
}

if (false && false) { //
    console.log(4);
}

if (true || true) { // 5
    console.log(5);
}

if (true || false) { // 6
    console.log(6);
}

if (false || true) { // 7
    console.log(7);
}

if (false || false) { // 8
    console.log(8);
}