//1. Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут быть числами или снова массивами, и так до любого уровня.

// Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.

function treeSum(array) {
    let sum = 0;
    let arrayString = array.join();
    for(let i = 0; i != arrayString.length; ++i){
        isFinite(parseFloat(arrayString[i])) ? sum += parseFloat(arrayString[i]) : false;
    }
    return sum;
}
console.log(treeSum([5, 7, 
    [4, [2], 8, [1,3], 2 ,], 
    [9, [] ], 
    1,8]));






//2. Создайте функцию, которая принимает число как строку n и возвращает число без конечных и стартовых нулей.
function removeLeadingTrailing(string){
    return parseFloat(string);
}
console.log(removeLeadingTrailing("07.1200")); 