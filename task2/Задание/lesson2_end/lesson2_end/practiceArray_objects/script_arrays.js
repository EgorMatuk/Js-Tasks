//1. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.

/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */

//Обратите внимание, что num также включено в возвращаемый массив.
function arrayOfMultiples(num, length){
    let array = [];
    let sum = 0;
    for(let i = 0; i!=length; ++i){
        sum += num;
        array.push(sum);
    }
    return array;
}

let array = arrayOfMultiples(12,10);
console.log(array);

 








//2. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.

//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.

/* numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */

function numberSplit(num){
    let array = [];
    if(num%2 === 0){
        for(let i = 0; i!= 2; ++i){
            array.push(num/2);
        }
    }else{
        let firstElement = parseInt(num/2);
        let secondElement = num - parseInt(num/2);
        if(firstElement < secondElement){
            array.push(firstElement,secondElement);
        }else{
            array.push(secondElement,firstElement);
        }
    }        
    return array;
}

let array2 = numberSplit(-9);
console.log(array2);

