/* 1. Напишите функцию, которая принимает массив пользователей arr, и возвращает массив пользователей отсортированный по возрастанию возраста. От самого юного до самого старшего */



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

 
/*  sortUsers(users) ➞ [
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


function sortUsers(arr){
    var resultArr = arr.sort(function(a, b){
        return b.age - a.age ;
    })
    return resultArr;
}


// console.log(sortUsers(users))





/*2. Напишите функцию, которая принимает массив чисел и возвращает второе по величине число.

secondBigNumber([20, 80, 60, 40, 100]) ➞ 80

secondBigNumber([29, 198, 72, 13, 122]) ➞ 122

secondBigNumber([52, 18, 11, 16, 10]) ➞ 18


Массив должен состоять минимум из 2 чисел.
*/










 /* 3. Напишите функцию, которая принимает массив чисел arr, строку str и возвращает массив чисел в соответствии со следующими правилами:

«Asc» возвращает отсортированный массив в порядке возрастания.
«Des» возвращает отсортированный массив в порядке убывания.
«None» возвращает массив без каких-либо изменений.




sortArr([5, 4, 3, 2], "Asc" ) ➞ [2, 3, 4, 5]

sortArr([6, 7, 10, 67], "Des") ➞ [67, 10, 7, 6]

sortArr([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

 */


function sortArr(arr, str){
    switch (str){
        case 'Asc':
            arr.sort(function(a, b){
                return a - b;
            })
        break;
        case 'Des':
            arr.sort(function(a, b){
                return b - a;
            })
        break;
        default :
        return arr;
        //break;
    }
    return arr;
}
console.log(sortArr([5, 4, 3, 2], "Asc" ));
console.log(sortArr([6, 7, 10, 67], "Des" ));
console.log(sortArr([1, 2, 3, 4], "None" ));