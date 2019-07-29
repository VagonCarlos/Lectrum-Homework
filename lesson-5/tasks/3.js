/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate(string, maxLength) {
    if (typeof string === 'string' && typeof maxLength === 'number') { 
        if (string.length > maxLength) {
            slicedString = string.slice(0, maxLength) + '...';
            return slicedString;
        } else {
            return string;
        }
    } else {
        throw new Error('Error: first parameter type should be a string and second shoud be a number');
    }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 18); // 'Вот, что мне хотел...'

exports.truncate = truncate;