/*
* Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
* */

const arr = new Map([
    ["js", "objects"],

    ["html", "tags"],

    ["css",    "selectors"]
]);

const keys = arr.keys();

for (let key of keys) {

    console.log(`Ключ - ${key}, значение - ${arr.get(key)}`);
}

