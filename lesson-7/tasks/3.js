/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(entryData, length) {
    if (arguments.length != 2) {
        throw new Error('Two arguments must be specified');
    }
    if (!( typeof entryData === 'number' || typeof entryData === 'string' || typeof entryData === 'object')) {
        throw new Error(
            'first parameter supports only these types: Number, String, Object, Array',
        );
    }
    if ( typeof length != 'number' ) {
        throw new Error('second parameter type is not a number type');
    }

    const createdArray = [];

    for(let i = 0; i < length; i++) {
        createdArray.push(entryData);
    }

    return createdArray;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

