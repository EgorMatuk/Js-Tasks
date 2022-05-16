/* 1. Создайте функцию, которая принимает три значения:

h - часы
m - минуты
s - секунды
Верните значение максимальной продолжительности.
 */


// longTime(1, 59, 3598) ➞ 1

// longTime(2, 300, 15000) ➞ 300

// longTime(15, 955, 59400) ➞ 59400


function longTime(h, m, s){
    var hSecond = h*3600;
    var mSecond = m*60;
    var resultMax = Math.max(hSecond, mSecond, s);
    if(resultMax === hSecond){
        return h;
    } else if(resultMax === mSecond){
        return m;
    } else if(resultMax === s){
        return s;
    }
}
//  console.log(longTime(1, 59, 3598));
//  console.log(longTime(2, 300, 15000));
//  console.log(longTime(15, 955, 59400));

 




//2. Если месяц и год представлены в виде чисел, верните, содержит ли этот месяц пятницу, 13-е число.

// isFriday13(3, 2020) ➞ true

// isFriday13(10, 2017) ➞ true

// isFriday13(1, 1985) ➞ false


function isFriday13(mon, year){
    var currentDate = new Date(year, mon - 1, 13);
    var resultDay = currentDate.getDay();
    if(resultDay === 5){
        return true;
    } else{
        return false;
    }
    //return resultDay === 5
}

// console.log(isFriday13(3, 2020));
// console.log(isFriday13(10, 2017));
// console.log(isFriday13(1, 1985));








// 3. Напишите функцию, которая принимает дату в формате yyyy / mm / dd в качестве входных данных и возвращает «Ура! Хэллоуин!», если дата 31 октября, иначе возвращает «Хеллоуин не сегодня:(».

/* halloween(new Date("2021/10/31")) ➞ "Ура! Хэллоуин!"

halloween(new Date("2020/07/31")) ➞ "Хеллоуин не сегодня:("

halloween(new Date("2019/10/12")) ➞ "Хеллоуин не сегодня:("
 */

function halloween(someDate){
    var currentMonth = someDate.getMonth();
    var currentDate = someDate.getDate();
    if(currentMonth === 9 && currentDate ===  31){
        return 'Ура! Хэллоуин!';
    } else{
        return 'Хеллоуин не сегодня:(';
    }
}

console.log(halloween(new Date("2021/10/31")));
console.log(halloween(new Date("2020/07/31")));
console.log(halloween(new Date("2019/10/12"))); 












// 4. Напишите функцию, которая принимает месяц и год (как целые числа) и возвращает количество дней в этом месяце.

// totalDays(2, 2018) ➞ 28

// totalDays(4, 1994) ➞ 30

// totalDays(2, 2002) ➞ 28

// totalDays(2, 2001) ➞ 28