function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            if (typeof _title == 'string') {
                title = _title;
            } else {
                console.log('제목은 문자열이어야 합니다.');
            }
        }
    }
}
ghost = factory_movie('Ghost in the shell'); 
matrix = factory_movie('Matrix'); 


console.log(ghost.get_title()); // Ghost in the shell
console.log(matrix.get_title()); // Matrix
 
ghost.set_title('공각기동대');
 
console.log(ghost.get_title()); // 공각기동대
console.log(matrix.get_title()); // Matrix

matrix.set_title(123); // 제목은 문자열이어야 합니다.