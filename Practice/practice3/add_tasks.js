// 1.Напишите функцию, которая возвращает сумму пропущенных чисел из заданного массива.


//sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18

//sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27

//sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// Нет пропущенных номеров (т.е. все числа в [1, 5] присутствуют в списке)

//Числовой диапазон, который следует учитывать при поиске пропущенных чисел в массиве, - это последовательность последовательных чисел между минимальным и максимальным из чисел (включительно).

function maxElem(array){
  let max = array[0];
  for(let i = 0; i != array.length; ++i){
    if(max < array[i]){
      max = array[i];
    }
  }
  return max;
}

function minElem(array){
  let min = array[0];
  for(let i = 0; i != array.length; ++i){
    if(min > array[i]){
      min = array[i];
    }
  }
  return min;
}


function sumMissingNumbers(array){
  
  let sumOne = 0;
  let sumTwo = 0;

  let firstElem = minElem(array);
  let lastElem = maxElem(array);

  for(let i = 0; i != array.length; ++i){
    sumOne+=array[i];
  }
  for(firstElem; firstElem <= lastElem; ++firstElem){
    sumTwo += firstElem;
  }
  if(sumOne > sumTwo){
    return sumOne - sumTwo;
  }else{
    return sumTwo - sumOne;
  }
}

console.log(sumMissingNumbers([1, 2, 3, 4, 5]));





// 2. Напишите функцию, которая принимает массив строк и возвращает массив только со строками, в которых есть числа. Если нет строк, содержащих числа, вернуть пустой массив.

/* numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"] 

Строки могут содержать пробелы или символы любого типа.
Попробуйте решить это без регулярного выражения.

*/
function numInStr(array){
  let arrayResult = [];
  for(let i = 0; i != array.length; ++i){
    for(let j = 0; j != array[i].length; ++j){
      if(!isNaN(parseFloat(array[i][j]))){
        arrayResult.push(array[i]);
        break;
      }
    }
  }
  return arrayResult;
}

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));












 /*  3.  Создайте функцию, которая принимает массив с объектами и возвращает сумму бюджетов людей.

  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) ➞ 65700
  
  getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]) ➞ 62600 */

function getBudgets(objectsArray){
  let sum = 0;
  for(let i = 0; i != objectsArray.length; ++i){
    sum += objectsArray[i].budget;
  }
  return sum;
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));












/*  4.Напишите функцию, которая принимает массив объектов даты и возвращает «самую длинную полосу» (т. Е. Количество последовательных дней подряд).



longestStreak([
  {
    "date": "2021-04-18"
  },
  {
    "date": "2021-04-19"
  },
  {
    "date": "2021-04-20"
  },
  {
    "date": "2021-04-26"
  },
  {
    "date": "2021-04-27"
  },
  {
    "date": "2021-04-30"
  }
]) ➞ 3


Пустой массив должен возвращать 0.

*/
function longestStreak(array){
  let date;
}












/* 5. Вам дана строка слов. Вам нужно найти слово "Nemo" и вернуть такую строку: «Я нашел Nemo в [номер слова по порядку]!».

Если вы не можете найти Немо, верните «Я не могу найти Nemo :(».


    findNemo("I am finding Nemo !") ➞ "Я нашел Nemo в 4!"

    findNemo("Nemo is me") ➞ "Я нашел Nemo в 1!"
    
    findNemo("I Nemo am") ➞ "Я нашел Nemo в 2!" */

    function findNemo(str){
      let num = 0;
      let word = '';
      let wordKey = 'Nemo';
      for(let i = 0; i!= str.length; ++i){
        word += str[i];
        if(str[i] === ' '){
          ++num;
          if(wordKey === word || wordKey + ' ' === word ){
            console.log(`Я нашел Nemo в ${num}!`);
            break;
          }
          word = '';
        }
      }
    }

    findNemo('I Nemo am');



