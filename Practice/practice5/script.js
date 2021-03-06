/* 1. Напишите функцию, которая принимает массив неотрицательных целых чисел и строк и возвращает новый массив без строк.

changeArray([1, 2, "a", "b"]) ➞ [1, 2]

changeArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

changeArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

Ноль - неотрицательное целое число.
В данных массивах есть только целые числа и строки.
Числа в массиве не должны повторяться.
Первоначальный порядок должен быть сохранен. */
function changeArray(array){
    return array.filter(value => Number.isInteger(value) && value >= 0);
}
console.log(changeArray([1, 2, "aasf", "1", "123", -123]));







 










 /* 2. Массив является особенным, если каждый четный индекс содержит четное число, а каждый нечетный индекс содержит нечетное число. Напишите функцию, которая возвращает true, если массив особенный, и false в противном случае.


isParticularArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Четные индексы: [2, 4, 6, 6]; Нечетные индексы: [7, 9, 1, 3]

isParticularArray([2, 7, 5, 1, 6, 1, 6, 3]) ➞ false
// Индекс 2 имеет нечетное число 5.

isParticularArray([2, 7, 8, 4, 6, 1, 6, 3]) ➞ false
// Индекс 3 имеет четное число 4


 */
function isParticularArray(array){
    return array.every((value, index) => !(value % 2 && index % 2) || (value % 2 && index % 2));
}
console.log(isParticularArray([2, 7, 4, 9, 6, 1, 6, 3]));











/* 3. Напишите функцию, которая принимает массив (результат игрового автомата) и возвращает true, если все элементы в массиве идентичны, и false в противном случае. В массиве будет 5 элементов.



testJackpot(["#", "#", "#", "#", "#"]) ➞ true

testJackpot(["xyz", "xyz", "xyz", "xyz", "xyz"]) ➞ true

testJackpot(["LL", "LL", "LL", "LL", "LL"]) ➞ true

testJackpot(["@@", "@", "@@@", "@@@@", "@@@@"]) ➞ false

testJackpot(["LL", "LL", "LL", "Ll", "LL"]) ➞ false


 */
function testJackpot(array){
    return array.every(value => value === array[0]);
}
console.log(testJackpot(["LL", "LL", "LL", "LL", "LL"]));























/* 4. Напишите функцию, которая принимает массив пользователей arr, и возвращает массив пользователей отсортированный по возрастанию возраста. От самого юного до самого старшего */



/*  var users = [
     {
         firstName: 'Alayah Mcgee',
         age: 37
     },
     {
        firstName: 'John Doe',
        age: 28
     },
     {
        firstName: 'Dev Bernard',
        age: 23
     },
     {
        firstName: 'Peter Johnson',
        age: 18
     }
 ]


 sortUsers(users) ➞ [
    {
        firstName: 'Peter Johnson',
        age: 18
    },
    {
        firstName: 'Dev Bernard',
        age: 23
    },
    {
        firstName: 'John Doe',
        age: 28
    },
    {
        firstName: 'Alayah Mcgee',
        age: 37
    }
] */

var users = [
    {
        firstName: 'Alayah Mcgee',
        age: 37
    },
    {
       firstName: 'John Doe',
       age: 28
    },
    {
       firstName: 'Dev Bernard',
       age: 23
    },
    {
       firstName: 'Peter Johnson',
       age: 18
    }
]

function sortUsers(array){
    return array.sort((a, b) => a.age - b.age);
}
console.log(sortUsers(users));












/*5. Напишите функцию, которая принимает массив чисел и возвращает второе по величине число.

secondBigNumber([20, 80, 60, 40, 100]) ➞ 80

secondBigNumber([29, 198, 72, 13, 122]) ➞ 122

secondBigNumber([52, 18, 11, 16, 10]) ➞ 18


Массив должен состоять минимум из 2 чисел.
*/










 /* 6. Напишите функцию, которая принимает массив чисел arr, строку str и возвращает массив чисел в соответствии со следующими правилами:

«Asc» возвращает отсортированный массив в порядке возрастания.
«Des» возвращает отсортированный массив в порядке убывания.
«None» возвращает массив без каких-либо изменений.




sortArr([5, 4, 3, 2], "Asc" ) ➞ [2, 3, 4, 5]

sortArr([6, 7, 10, 67], "Des") ➞ [67, 10, 7, 6]

sortArr([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

 */











