/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {
    get salary() {
        let month = parseInt(new Date().getMonth());
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let total_days = 32 - new Date(year, month, 32).getDate();
        let days_difference = total_days - date;
        text = '';
        days_difference >= 20 ? text = 'good salary' : text = 'bad salary'
        return text;
    }
};
person.salary;