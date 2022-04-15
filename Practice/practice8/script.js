//1. Создайте функции(методы) для класса Calculator, которые могут делать следующее:

//Сложение двух чисел.
//Вычитание двух чисел.
//Умножение двух чисел.
//Деление двух чисел.


// var calculator = new Calculator()

// calculator.add(10, 5) ➞ 15

// calculator.subtract(10, 5) ➞ 5

// calculator.multiply(10, 5) ➞ 50

// calculator.divide(10, 5) ➞ 2

function Calculator(){
    this.add = function(num1,num2){
        return  num1 + num2;
    }
    this.subtract = function(num1,num2){
        return  num1 - num2;
    }
    this.multiply = function(num1,num2){
        return  num1 * num2;
    }
    this.divide = function(num1,num2){
        return  num1 / num2;
    }
}

var calculator = new Calculator()
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5) );
console.log(calculator.multiply(10, 5) );
console.log(calculator.divide(10, 5));






 









// 2. Создайте класс, который принимает следующие четыре аргумента для конкретного футболиста:
//name
//age
//height
//weight
//Также создайте три функции(метода) для класса, которые возвращает следующие строки:

//getAge () возвращает "name - ему age(лет)"
//getHeight () возвращает "name его рост height(см)"
//getWeight () возвращает "name весит (weight)кг"



/* var p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() ➞ "David Jones ему 25"
 p1.getHeight() ➞ "David Jones его рост 175см"
 p1.getWeight() ➞ "David Jones весит 75кг" */



//

function Player(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.getAge = function(){
        return this.name + ' ему ' + this.age + 'лет';
    }
    this.getHeight = function(){
        return this.name + ' его рост ' + this.height + 'см';
    }
    this.getWeight = function(){
        return this.name + ' весит ' + this.weight + 'кг';
    }
}

var p1 = new Player("David Jones", 25, 175, 75);
console.log(p1.getAge());
console.log(p1.getHeight());
console.log(p1.getWeight());
















//3. Учитывая name и lastname человека:

//Сформируйте метод getFullName, просто соединив name и lastname, разделенные пробелом.
//Сформируйте getEmail, соединив name и lastname вместе с расширением. между ними и в конце укажите @email.com. Убедитесь, что все адрес почтовый написан строчными буквами.

/* var emp1 = Employee("John", "Smith")
emp1.getFullName() ➞ "John Smith"

var emp2 = Employee("Mary",  "Sue")
emp2.getEmail() ➞ "mary.sue@email.com"

var emp3 = Employee("Antony", "Walker")
emp3.name ➞ "Antony" */

function Employee(name, surname){
    this.name = name;
    this.surname = surname;

    this.getFullName = function(){
        return this.name + this.surname;
    }
    this.getEmail = function(name){
        return this.name + '@email.com';
    }
}

var emp1 = new Employee("John", "Smith");
console.log(emp1.getFullName()); 

var emp2 = new Employee("Mary",  "Sue");
console.log(emp2.getEmail()); 

var emp3 = new Employee("Antony", "Walker");
console.log(emp3.name);







