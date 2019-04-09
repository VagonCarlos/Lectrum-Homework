var num = 12;
function getDivisors(val) {
    if(typeof val === 'number') {
        if (val > 0) {
            var arr = [];
            for (var i = 1; i <= num; i++) {
                if (num % i == 0) {
                    arr.push(i);
                }
            }
            return arr;
        } else {
            throw new Error('Error: parameter can\'t be a 0');
        }
    } else {
        throw new Error('Error: parameter type is not a Number');
    }
}