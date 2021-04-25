// 메소드가 소속된 객체가 this
var o = {
    func : function() {
        if (o === this) {
            console.log("o === this");
        }
    }
}

o.func(); // o === this