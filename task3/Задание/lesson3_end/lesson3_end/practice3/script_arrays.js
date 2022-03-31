//1. Создайте функцию, которая принимает массив чисел или букв и возвращает строку.

/*arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/


function arrayToString(arr){
    var str = '';
    for(var i = 0; i < arr.length; i++){
        str += arr[i];
    }
    return str;
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));







