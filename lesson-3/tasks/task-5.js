var arr = [1, 2, -4, 3, -9, -1, 7];
var arrPositive = [];
for(i = 0; i < arr.length; i++) {
    function isPositive(val) {
        if(typeof val === 'number') {
            if (val > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            throw new Error('Error: parameter type is not a Number');
        }
    }
    if (isPositive(arr[i]) === true) {
        arrPositive.push(arr[i]);
    }
}
