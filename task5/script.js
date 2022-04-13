// 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
//             Регулярные выражения (кто умеет) не использовать.
//             Спросить у пользователя строку. Вывести в консоль количество русских  гласных букв в ней.

//      •	с использованием метода массива forEach,
//      •	с использованием метода массива filter,
//      •	с использованием метода массива reduce.


function findVow(){
    let value = Array.from(prompt('Введите строку'));
    !(value || value == null)? findVow() : true;
    let Vow = ('аиеёоуыэюяАИЕЁОУЫЭЮЯ');
    let sum = 0;

    //forEach 
    value.forEach(element => {
        Array.from(Vow).find(vowElement => vowElement === element)? ++sum : false;
    });

    //filter
    value.filter(element => (Vow.includes(element)? ++sum : false));


    //reduce
    sum = value.reduce((previousValue, currentValue) => previousValue + Vow.includes(currentValue), 0) 
    
    return sum;
}

console.log(findVow());







// 2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача - создать объект, отображающий каждого человека по его роду занятий

let names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
let jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

function combineNameWork(namesArray,jobsArray){
    return namesArray.reduce(function(previousValue, item, index){
        previousValue[item] = jobsArray[index];
        return previousValue;
    },{})
    // namesArray.map((item,index) => previousValue[item] = jobsArray[index]);  
}
console.log(combineNameWork(names,jobs));









// 3.	У вас есть входной массив (из строк с двумя буквами) и массив слов
// Напишите функцию, которая возвращает true, если каждую (строку с двумя буквами) из первого массива можно найти хотя бы один раз в массиве слов(втором массиве).
function canFind(arrayWords, arrayString){
    return arrayWords.every((word) => arrayString.some(string => string.includes(word)));   
}
console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));

