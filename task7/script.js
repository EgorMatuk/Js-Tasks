// 1. Напишите функцию, которая переупорядочивает цифры каждого числового элемента в массиве в порядке возрастания (asc) или убывания (desc).
// reorderNums([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]
// reorderNums ([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
// reorderNums ([63251, 78221], "asc") ➞ [12356, 12278]
// reorderNums ([63251, 78221], "desc") ➞ [65321, 87221]
// reorderNums ([1, 2, 3, 4], "asc") ➞ [1, 2, 3, 4]
// reorderNums ([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]
function reorderNums(array, key){
    switch(key){
        case "asc":
            return array.map(element => element = parseInt((element + '').split('').sort((a, b) => a - b).join('')));

        case "desc":
            return array.map(element => element = parseInt((element + '').split('').sort((a, b) => b - a).join('')));
    }
}
console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
console.log(reorderNums ([63251, 78221], "desc"));




// 2. Напишите функцию, которая принимает закодированную строку и возвращает объект в соответствии со следующим примером:
// parseCode("John000Doe000123") ➞ {  c: "John",  lastName: "Doe",  id: "123"}
// parseCode("michael0smith004331") ➞ {  firstName: "michael",  lastName: "smith",  id: "4331"}
// parseCode("Thomas00LEE0000043") ➞ {  firstName: "Thomas",  lastName: "LEE",  id: "43"}
function parseCode(string){
    let arrKey = ["firstName", "LastName", "id"];
    return string.split(0).filter(element => element != "").reduce(function(previousValue, item, index){
        previousValue[arrKey[index]] = item;
        return previousValue;
    },{});   
}
console.log(parseCode("John000Doe000123"));




// 3. Создайте функцию, которая принимает массив в качестве аргумента и возвращает истину или ложь в зависимости от того, является ли среднее всех элементов в массиве целым числом или нет.
// isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false
function isAvgWhole(array){
    let sum = array[0];
    for(let i = 1; i != array.length; ++i){
        sum += array[i];
        if(sum % ++i != 0) {
            return false;
        }
    }
    return true;
}
console.log(isAvgWhole([1, 5, 6]));


// 4. Дан массив чисел, верните массив, содержащий все четные числа в исходном массиве, который также имеет четные индексы.
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
function getOnlyEvens(array){
    return array.filter((element, index) => !(element % 2) && !(index % 2));
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));

