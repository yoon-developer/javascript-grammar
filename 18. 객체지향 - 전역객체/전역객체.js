function func() {
    console.log('Hello?');
}

func();

/*
- window: 객체
- func: 메소드 (전역 객체)
- window.func: func 는 window 에 소속된 메소드
*/
// window.func();

var o = {'func' : function() {
    console.log('Hello?');
}}

o.func();

// window.o.func();