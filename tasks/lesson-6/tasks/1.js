/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const demoArray = [1, 2, 3];

// Решение
function forEachImp(array, callback) {
    if (arguments.length != 2) {
        throw new Error('You need to specify 2 arguments')
    }
    if (!Array.isArray(array)) {
        throw new Error('First parameter must be an array')
    }
    if (!Array.isArray(array)) {
        throw new Error('Second parameter must be a function')
    }

    counter = 0;
    length = array.length;

    for(counter; counter < length; counter++) {
        callback(array[counter], counter, array)
    }
}

const result = forEachImp(demoArray, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});


