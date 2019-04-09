function f(val){
    var num = 0;
    if (typeof val === "number") {
        num = val * val * val;
    } else {
        throw new Error('Error: all parameters type should be a Number');
    }
    console.log(num);
}
f(1);