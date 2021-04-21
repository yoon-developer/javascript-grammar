/*
function 함수명( [인자...[,인자]] ){
   코드 내용
   return 반환값
}

// 호출
함수명([인자...[,인자]);
*/

function numbering() {
    var i = 0;
    while (i < 3) {
        console.log("numbering function " + i);
        i++;
    }
}

function count() {
    var i = 0;
    while (i < 3) {
        console.log("count function " + i);
        i++;
    }
}

numbering();
// count();