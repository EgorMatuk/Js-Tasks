//Task1. Напишите функцию, которая для каждого элемента массива добавлять +1 к текущему числу.

/* incrementElements([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementElements([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementElements([-1, -2, -3, -4]) ➞ [0, -1, -2, -3] */
function incrementElements(array){
    for(let i = 0; i != array.length; ++i){
        array[i]+=1;
    }
    return array;
} 
console.log(incrementElements([-1, -2, -3, -4]));
 







// Task2. Напишите функцию для отображения массива в обратном порядке.


// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

function reverse(array){
    let resultArray = [];
    for(let i = array.length-1; i >= 0; --i){
        resultArray.push(array[i]);
    }
    console.log(resultArray);
} 
reverse([1, 2, 3, 4]);









// Task3. Создайте функцию, которая принимает два массива и вставляет второй массив в середину первого массива.

// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]


//* Первый массив всегда состоит из двух элементов.
function tuckIne(firstArray,secondArray){
    let lastElement = firstArray[1];
    firstArray.pop();
        for(let i = 0; i < secondArray.length; ++i){
            firstArray.push(secondArray[i]);
        }
    firstArray.push(lastElement);
    return firstArray;
}
console.log(tuckIne([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
 

 
