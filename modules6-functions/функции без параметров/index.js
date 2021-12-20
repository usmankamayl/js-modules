/**
 Задание 1.

 В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

 При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

 На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
 */


const arr2 = [1, 5, 8,  0,  12, 15, 34, 87, 12, 234, 11, 0, 11, 13, 0, 0];



function printEvensAndOdds (arr) {
    const evens = [];
    const odds = [];
    const nulls = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr2[i] === 0) {
            nulls.push(arr[i]);
        } else if (arr2[i] % 2 == 0) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }

    console.log('Количество нулей: ', nulls.length);
    console.log('Количество четных чисел: ', evens.length);
    console.log('Количество нечетных чисел: ', odds.length);
}

printEvensAndOdds(arr2);
