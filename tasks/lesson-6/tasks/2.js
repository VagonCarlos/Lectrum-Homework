/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(array, callback) {
    if (arguments.length !== 2) {
        throw new Error('function be called with two arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    let filtered = [];
    
    for(counter = 0; counter < array.length; counter++) {
        let currentItem = array[counter];
        let status = callback(currentItem, counter, array);
        
        if(status) {
            filtered.push(currentItem);
        }
    }

    return filtered;
}

const filteredArray = filter(array, function(item){
    return item === 'Добрый вечер!';
});

console.log(filteredArray);