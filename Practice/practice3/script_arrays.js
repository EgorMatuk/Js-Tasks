//1. Создайте функцию, которая принимает массив чисел или букв и возвращает строку.

/*arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/
function arrayToString(array){
    let string = '';
    for(let i = 0; i != array.length; ++i){
        string += array[i];
    }
    return string;
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));










