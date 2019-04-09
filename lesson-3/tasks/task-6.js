var num = 0;
function isEven(val) {
    if(typeof val === 'number') {
        if (val % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error('Error: parameter type is not a Number');
    }
}