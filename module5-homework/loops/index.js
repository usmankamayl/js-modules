/**
 * Задание 6.

 Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

 Задание 7.

 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

 При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
 */


let arr = ['apple', 'apple', 'apple'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[0] === arr[i]) {
        console.log(true)
    } else {
        console.log(false);
    }
}

const a = 1;
console.log(typeof a);
const arr2 = [1, 5, 8,  0,  12, 15, 34, 87, 12, 234, 11, 0];
const evens = [];
const odds = [];
const nulls = [];
for (let i = 0; i < arr2.length; i++) {
   if (arr2[i] === 0) {
       nulls.push(arr2[i]);
   } else if (arr2[i] % 2 == 0) {
       evens.push(arr2[i]);
   } else {
       odds.push(arr2[i]);
   }
}

console.log(nulls);
console.log(evens);
console.log(odds);
