/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
    if (typeof source === 'string' && typeof example === 'string') {
        resetStr = source.toLowerCase();
        resetExmp = example.toLowerCase();
        return resetStr.indexOf(resetExmp) + 1 ? true : false;
    } else {
        throw new Error('Error: parameter type should be a String');
    }
}

checkSpam('pitterxxx@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
