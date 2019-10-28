/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */


// Решение

function reduce(array, callback, acc) {
    if (arguments.length !== 3) {
        throw new Error('function be called with two arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    if (!(typeof acc === 'number' || typeof acc === 'string')) {
        throw new Error('third parameter type should be a Number or a String');
    }

    let accumulator = acc;

    for (let counter = 0; counter < array.length; counter++) {
        accumulator = callback(accumulator, array[counter], counter, array);
    }

    return accumulator;
}

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

const result = reduce(
    array,
    function(acc, item, i) {
        return acc + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result);
