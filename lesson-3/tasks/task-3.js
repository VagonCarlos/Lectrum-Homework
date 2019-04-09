function f(val1, val2, val3){
    var num = 0;
    if (typeof val1 == "number" && typeof val2 == "number" && typeof val3 == "number") {
        num = (val1 - val2) / val3;
    } else {
        throw new Error('Error: all parameters type should be a Number');
    }
    return num;
}
f(9,3,2);