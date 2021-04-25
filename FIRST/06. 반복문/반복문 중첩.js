/*
- break 반복작업 중단
- continue 현재 실행 중인 작업 중단 하고 다음 반복 실행
*/

for(var i = 0; i < 5; i++) {
    
    if(i === 3) {
        continue;
    }
    console.log('Hello ' + i);
}

for(var i = 0; i < 10; i++) {
    console.log('Coding everybody ' + i);
    if(i === 5) {
        break;
    }
}