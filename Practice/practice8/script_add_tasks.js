/**
  1.  Вы заблудились в новом месте. Учитывая класс с именем СurrentСoordinates с методом с getFullIndo, верните координаты своего местоположения.
 */


//var place1 = new СurrentСoordinates(1,2);
//place1.getFullIndo() ➞ "x = 1", "y = 2"


//var place2 = new СurrentСoordinates(76,29);
//place1.getFullIndo() ➞ "x = 76", "y = 29"

function СurrentСoordinates(x, y){
  this.x = x;
  this.y = y;

  this.getFullIndo = function(){
    return `x = ${this.x}, y = ${this.y}`
  }
}
var place1 = new СurrentСoordinates(1,2);
console.log(place1.getFullIndo());

var place2 = new СurrentСoordinates(76,29);
console.log(place2.getFullIndo());







/*
2. Ваша задача - создать класс Circle, который создает круг с радиусом, заданным аргументом. Построенные круги должны иметь два метода-геттера getArea() ((PI) * r^2) и getPerimeter() ((2 * PI) * r), которые дают  соответствующую площадь, так и периметр (окружности).

PI = 3.14

*/


// var circle1 = new Circle(10);

// circle1.getArea() ➞ 314.16 

// circle1.getPerimeter() ➞ 62.83



// var circle2 = new Circle(2.5);

// circle1.getArea() ➞ 19.63

// circle1.getPerimeter() ➞ 15.71

function Circle(radius){
  this.radius = radius;

  this.getArea = function(){
    return Math.PI * Math.pow(this.radius,2);
  }
  this.getPerimeter = function(){
    return Math.PI * 2 * this.radius;
  }
}

var circle1 = new Circle(10);
console.log(circle1.getArea());
console.log(circle1.getPerimeter());


var circle2 = new Circle(2.5);
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


















/* 3. Создайте класс MagicStr  у которого будут следующие методы:

magic.replace ("string", 'char', char') -  метод, который заменяет все указанные символы другими символами.
magic.strLength ("string") - метод, которая возвращает длину строки.
magic.trim ("строка    ") - метод, который возвращает строку, которая обрезает пробелы как в начале, так и в конце.
magic.listSlice (list, tuple) - метод, который возвращает элементы в списке, которые находятся среди указанных индексов. Если длина нового списка равна 0, верните -1.


var magic = new MagicStr();

magic.replace("AzErty-QwErty", "E", "e") ➞ "Azerty-Qwerty"

magic.strLength("hello world") ➞ 11

magic.trim("      javascript is awesome      ") ➞ "javascript is awesome"

magic.listSlice([1, 2, 3, 4, 5], (2, 4)) ➞ [ 2, 3, 4 ]
*/


function MagicStr(){
  this.replace = function(string, char1, char2){
    return string.replace(char1, char2);
  }
  this.strLength = function(string){
    return string.length;
  }
  this.trim = function(string){
    return string.trim();
  }
  this.listSlice = function(list, tuple){
    return list.slice(list.length - tuple ,tuple);
  }
}

var magic = new MagicStr();
console.log(magic.replace("AzErty-QwErty", "E", "e"));
console.log(magic.strLength("hello world"));
console.log(magic.trim("      javascript is awesome      "));
console.log(magic.listSlice([1, 2, 3, 4, 5], (2, 4)));













/*4.Создайте класс с именем User и создайте способ проверки количества созданных пользователей (количества экземпляров), чтобы значение можно было получить как атрибут класса.*/

// u1 = new User("johnsmith10")
// User.userCount ➞ 1

// u2 = new User("marysue1989")
// User.userCount ➞ 2

// u3 = new User("milan_rodrick")
// User.userCount ➞ 3

// u1.username ➞ "johnsmith10"

// u2.username ➞ "marysue1989"

// u3.username ➞ "milan_rodrick"
let users = 0;

function User(username){
  this.username = username;
}
u1 = new User("johnsmith10")
console.log(User.userCount);
u2 = new User("marysue1989");
console.log(User.userCount);
u3 = new User("milan_rodrick");
console.log(User.userCount);



