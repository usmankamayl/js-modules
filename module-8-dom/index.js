/*
* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
* */

function foo(obj) {
    for (let key in obj) {
        if (student.hasOwnProperty(key)) {
        console.log(key);
        }
    }
}

const user = {
    name: 'Usman',
    age: 46,
}

const student = Object.create(user);
student.job = 'js';

foo(student);

/*
Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
* */
{
    const user = {
        name: 'Usman',
        age: 46,
    }

    function checkKey(str, obj) {
        return str in obj
    }

    console.log(checkKey('age', user));
}

/*
* Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
* */

{
    function createNull() {
        return Object.create(null);
    }


    const obj1 = createNull();
    obj1.city = 'Moscow';
    console.log(obj1);
}
/*
 Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.
 */

function Appliance (name, power) {
    this.name = name;
    this.power = power;
}

Appliance.prototype.toPlug = function () {
    console.log(`${this.name} подключен к розетке. Его мощность ${this.power} вт`)
}

Appliance.prototype.notPlugged = function () {
    console.log(`${this.name} не подключен к розетке. Его мощность ${this.power} вт`)
}

const iron = new Appliance('утюг', 200);
const computer = new Appliance('компьютер', 80);

computer.toPlug();

iron.toPlug();
iron.notPlugged();

function RussianCleaner (name, price) {
    this.name = name;
    this.price = price;
    this.getInfo = function () {
        console.log(`Пылесос ${name} стоимостью ${price}`)
    }
}

RussianCleaner.prototype = new Appliance();

const cleaner = new RussianCleaner('Pioneer', 11299);
cleaner.power = 250;
cleaner.getInfo();
cleaner.toPlug();

/*Задание 5 */

class Appliance1 {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    toPlug() {
        console.log(`${this.name} подключен к розетке. Его мощность ${this.power} вт`);
    };

    notPlugged() {
        console.log(`${this.name} не подключен к розетке. Его мощность ${this.power} вт`);
    };

}

class RussianCleaner1 extends Appliance1 {
    constructor(price, name, power) {
        super(name, power);
        this.price = price;
    }
    getInfo() {
        console.log(`Пылесос ${this.name} стоимостью ${(this.price)}`)
    }
}

const cleaner1 = new RussianCleaner1(11199,'Pioneer1', 220);

cleaner1.getInfo();
cleaner1.notPlugged();
