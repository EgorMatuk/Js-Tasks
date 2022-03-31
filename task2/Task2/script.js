//Напишите функцию, которая принимает массив целых чисел и строк. Преобразуйте целые числа в строки и верните новый массив.
function convertElements(array){
    for(let i = 0; i!=array.length; ++i)
    {
        array[i] += '';
    }
    return array;
}
let array = [0,2,'13','asasasaas'];
console.log(array);
console.log(convertElements(array));


//Создайте функцию, которая возвращает количество " true” значений в массиве.
function numericTrue(array){
    let sum = 0;
    for(let i = 0; i!=array.length; ++i)
    {
        if(array[i] == true){
            ++sum;
        }
    }
    return sum;
}
let secondArray = [];
console.log(numericTrue(secondArray));


//Создайте функцию, которая принимает массив чисел, и возвращает наибольшее и наименьшее число.
function highLow(array){
    let max = array[0];
    let min = array[0];
    for(let i = 0; i!=array.length; ++i){
        if(max < array[i]){
            max = array[i];
        }
        if(min > array[i]){
            min = array[i];
        }
    }
    console.log(`Максималый элемент массива: ${max}, минимальный элемент массива: ${min};`)
}
let thirdArray = [12,1,5,6,7,8,9,13];
console.log(thirdArray);
highLow(thirdArray);