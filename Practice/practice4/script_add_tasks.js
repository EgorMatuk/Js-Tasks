//1. Напишите функцию, которая принимает строку и возвращает строку, в которой каждый символ повторяется один раз.

// doubleElement("String") ➞ "SSttrriinngg"

// doubleElement("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleElement("1234!_ ") ➞ "11223344!!__  "


// Все тестовые примеры содержат допустимые строки. Пробелы, специальные символы или цифры также учитываем.
function doubleElement(string){
    stringResult = '';
    for(let i = 0; i != string.length; ++i){
        stringResult += `${string[i]}${string[i]}`;
    }
    return stringResult;
}
console.log(doubleElement("String"));








//2. Напишите функцию, которая перемещает все заглавные буквы в начало слова.

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"



//Сохраняйте исходный относительный порядок букв верхнего и нижнего регистра одинаковым.
function capToFront(string){
    for(let i = 0; i!=string.length; ++i){
        if(string[i] === string[i].toUpperCase()){
            string = `${string[i]} + ${string}`
            string.slice(string[i],string[i+1]);
        }
    }
    return string;
}
console.log(capToFront("shOrtCAKE"));








//3. Напишите функцию для замены всех экземпляров символа s1 на символ s2 и наоборот.


// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"







//4. Напишите функцию, которая возвращает массив строк, отсортированных по длине в порядке возрастания.


// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []


//Строки будут иметь уникальную длину, поэтому не беспокойтесь о сравнении двух строк одинаковой длины.
//Вернуть пустой массив, если входной массив пуст
