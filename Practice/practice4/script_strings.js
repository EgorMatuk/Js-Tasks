//1. Проверьте, является ли первая буква в каждом слове заглавной. 


// checkTitle("I Am Still Trying To Figure That Out!") ➞ true

// checkTitle("I Work In An Office!") ➞ true

// checkTitle("I do NOT work in an office") ➞ false
function checkTitle(string){
    let array = string.split(' ');
    for(let i = 0; i!=array.length; ++i){
        if(array[i][0] !== array[i][0].toUpperCase()){
            return false;
        }
    }
    return true;   
}
console.log(checkTitle("I Am Still Trying To Figure That Out!"))


















// 2. Создайте функцию, которая находит слово "велосипед" в заданной строке (без учета регистра). Если найдено, верните "Велосипед найден", иначе верните "Велосипеда нет".


// bikeSearch("Также популярен среди туристов и в спортивных целях.") ➞ "Велосипеда нет"

// bikeSearch("Велосипед как «транспортное средство") ➞ "Велосипед найден"

// bikeSearch("Первый велосипед в мире, похожий на используемые в наши дни, назывался Rover") ➞ "Велосипед найден"


//"велосипед" может встречаться в разных регистрах (например, в верхнем, нижнем, смешанном).
function bikeSearch(string){
    let val = false;
    let array = string.split(' ');
    for(let i = 0; i!=array.length; ++i){
        if(array[i] === 'велосипед' || array[i] === 'Велосипед'){
            val = true;
            break;
        }
    }
    if(val){
        console.log('Велосипед найден!');
    }else{
        console.log('Велосипеда нет');
    }
}
bikeSearch("Велосипед как «транспортное средство");

 
















//3. Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.


// countVowels("Braid") ➞ 2

// countVowels("Daughter") ➞ 3

// countVowels("Package") ➞ 3

function countVowels(string){
    let count = 0;
    let check = 'aeiou';
    for(let i = 0; i!=string.length; ++i){
        for(let j = 0; j!=check.length; ++j){
            if(string[i] === check[j]){
                ++count;
            }
        }
    }
    return count;
}
console.log(countVowels("Package"));





// a, e, i, o, u считаются гласными (без "y").
// Все тестовые примеры состоят из одного слова и содержат только буквы.