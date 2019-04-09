var arr = [1, 2, 3];
function f(val, count) {
    if(Array.isArray(arr)) {
        if (arr.length > 0) {
            console.log(val[count++]);
            if(count < arr.length) {
                f(val, count);
            }
        } else {
            throw new Error('Error: parameter can\'t be an empty');
        }
    } else {
        throw new Error('Error: parameter type should be an array');
    }
}
f(arr, 0);
