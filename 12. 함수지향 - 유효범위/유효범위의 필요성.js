function a (){
    var i = 0; 
    // i = 0;
}

// function 안에 들어가 있지 않은 i 는 전역 변수
for(var i = 0; i < 5; i++){
    a();
    console.log(i);
}