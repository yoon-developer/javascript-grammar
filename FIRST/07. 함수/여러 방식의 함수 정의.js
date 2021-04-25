var numbering = function (){
    i = 0;
    while(i < 5){
        console.log("value: " + i);
        i += 1;
    }   
}

numbering();

(function (){
    i = 0;
    while(i < 5){
        console.log("Anonymous fuction value: " + i);
        i += 1;
    }   
})();