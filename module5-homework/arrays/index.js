/**
 * Задание 5.

 Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
 */



let arr = ['apple', 'samsung', 'nokia'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// using forEch
arr.forEach(el => console.log(el));

