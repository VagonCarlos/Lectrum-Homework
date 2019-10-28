/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

// Решение

function every(array, callback) {
    if (arguments.length !== 2) {
        throw new Error('function be called with two arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a Function');
    }
    
    let status = false;

    for(counter = 0; counter < array.length; counter++) {
        const currentItem = array[counter];
        status = callback(currentItem, counter, array);
        
        if(!status) {
            break;
        }
    }

    return status;

}

const array = [2, 4, 6];

const result = every(array, function(item){
    return item % 2 === 0;
});

console.log(result);