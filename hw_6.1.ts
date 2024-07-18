// Определите интерфейс, использующий сигнатуру индекса с типами объединения. К примеру, тип значения для каждого ключа может быть число | строчка.
// Создайте интерфейс, в котором типы значений в сигнатуре индекса являются функциями. Ключами могут быть строки, а значениями – функции, принимающие любые аргументы.
// Опишите интерфейс, использующий сигнатуру индекса для описания объекта, подобного массиву. Ключи должны быть числами, а значение – определенного типа.
// Создайте интерфейс с определенными свойствами и индексной сигнатурой. Например, можно иметь свойства типа name: string и индексную сигнатуру для дополнительных динамических свойств.
// Создайте два интерфейса, один с индексной сигнатурой, а другой расширяйте первый, добавляя специфические свойства.
// Напишите функцию, которая получает объект с индексной сигнатурой и проверяет, соответствуют ли значения определенных ключей определенным критериям (например, все значения являются числами).

//1
interface ISomeIndexInterface {
    [key: string]: number | string;
}

//2
interface IFunctionIndexedInterface {
    [key: string]: (...args: any[]) => any;
}

//3
interface IArrayLike<T> {
    [index: number]: T;
}

//4
interface IPerson {
    name: string;
    surname: string;
    [key: string]: string;
}

//5
interface IBase {
    [key: string]: any;
}

interface IExtended extends IBase {
    name: string;
    age: number;
}

//6
interface IObject {
    [key: string]: any;
}

function areAllValuesNumbers(obj: IObject, keys: string[]): boolean {
    return keys.every(key => typeof obj[key] === 'number');
}

const data: IObject = {
    a: 1,
    b: 2,
    c: "lalala",
    d: 4
};

const keysToCheck = ["a", "b", "d"];
const result = areAllValuesNumbers(data, keysToCheck);
console.log(result); // true

const keysToCheck2 = ["a", "b", "c"];
const result2 = areAllValuesNumbers(data, keysToCheck2);
console.log(result2); // false
