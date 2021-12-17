//задание 3 Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = 'Hello';

console.log(str.split('').reverse().join(""));

//задание 4 Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

console.log(randomInteger(1, 100));
