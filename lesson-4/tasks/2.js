/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */

const person = {};

// Решение
Object.defineProperties(person, {
    rate: {
        value: null,
        writable: true,
        configurable: false
    },
    salary: {
        get: function() { 
            let date = new Date().getDate();
            if (person.rate) {
                return date * person.rate;
            } else {
                return 0;
            }
        }
    }
});

person.rate = 30;

console.log(person.salary);
