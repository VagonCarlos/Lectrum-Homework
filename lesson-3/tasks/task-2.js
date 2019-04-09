function f(){
    var num = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            num += arguments[i];
        } else {
            throw new Error('Error: all parameters type should be a Number');
        }
    }
    return num;
}
f(1,2,3,4,5);