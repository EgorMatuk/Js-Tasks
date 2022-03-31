//1.50-30-20 Стратегия

/*Стратегия 50-30-20 - это простой способ составления бюджета, который включает в себя расходование 50% дохода после уплаты налогов 
на нужды, 30% дохода после уплаты налогов на потребности и 20% дохода после уплаты налогов на сбережения или погашение долга.

Учитывая доход после уплаты налогов как (expenses - нахвание объекта), вы должны создать функцию, которая вернет объект, показывающий, сколько человеку
нужно потратить на нужды, потребности и сбережения.

fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
*/

function fiftyThirtyTwenty(numb){
    var obj = {
        needs: numb*0.5,
        wants: numb*0.3,
        savings: numb*0.2
    }
    return obj;
}

// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450));

 









//2.Напишите функцию, которая преобразует объект в массив, где каждый элемент представляет из себя пару ключ-значение в форме массива.

/* toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ [] */

//Вернуть пустой массив, если объект пуст.

function toArray(obj){
    var resultArr = [];
    for(var key in obj){
        resultArr.push([key, obj[key]])
    }
    return resultArr;
} 

// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));









//3. Разница(Выйгрыши и поражения футбольного клуба) 

/*Для объекта, содержащего количество побед и поражений, верните, какое количество разницы должно отображаться.
 Это рассчитывается путем вычитания количества побед от количества поражений.


 matchDifference({ wins: 12, losing: 8 }) ➞ 4
 matchDifference({ wins: 7, losing: 13 }) ➞ -6
 matchDifference({ wins: 10, losing: 10 }) ➞ 0
*/

function matchDifference(obj){
    var result = obj.wins - obj.losing;
    return result;
}

// console.log(matchDifference({ wins: 12, losing: 8 }));
// console.log(matchDifference({ wins: 7, losing: 13 }));
// console.log(matchDifference({ wins: 10, losing: 10 }));









