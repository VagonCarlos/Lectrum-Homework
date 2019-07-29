/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(string) {
    if (typeof string === 'string' ) {
        if (string.length) {
            toUpperCase = string[0].toUpperCase() + string.substring(1);
        } else {
            toUpperCase = "";
        }
    } else {
        throw new Error('Error: parameter type should be a String');
    }
    return toUpperCase;
}

upperCaseFirst('pitter');
upperCaseFirst('');

exports.upperCaseFirst = upperCaseFirst;
