/*1. Объявите класс под названием Square. "a" - это сторона квадрата(у квадрата все стороны равны). Напишите следующие методы:
  calculatePerimeter() - вычисляет периметр квадрата. Формула("a" * 4);
  calculateArea() - вычисляет площадь квадрата. Формула ("a" * "a");

  Объявите класс Rhombus. "a" - это сторона ромба(у ромба все стороны равны), "h" - высота ромба. Создайте для этого класса 2 метода:
  calculatePerimeter() - вычисляет периметр ромба. Формула("a" * 4);
  calculateArea() - вычисляет площадь ромба. Формула("a" * "h").
*/

function Square(a){
  this.a = a;
  this.calculatePerimeter = function(){
    return this.a * 4;
  }
  this.calculateArea = function(){
    return this.a * this.a;
  }
}

function Rhombus(a, h){
  Square.call(this, a);
  this.h = h;
  this.calculateArea = function(){
    return this.a * this.h;
  }
}

var rhombus = new Rhombus(10, 15);
// console.log(rhombus);
// console.log(rhombus.calculatePerimeter());
// console.log(rhombus.calculateArea());











/*2.  Создайте пример наследования. Реализуйте класс Student и класс Aspirant. Аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит поля: firstName, lastName, group, класс Aspirant также имеет такие поля. А также, averageMark, содержащую средний балл.
б) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 10, то сумма 100 руб, иначе 80. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 10, то сумма 200 руб, иначе 180.
 */


function Student(firstName, lastName, group, averageMark){
  this.firstName = firstName;
  this.lastName = lastName;
  this.group = group;
  this.averageMark = averageMark;

  this.getScholarship = function(){
    if(this.averageMark === 10){
      return '100 руб.';
    } else{
      return '80 руб.';
    }
  }
}

function Aspirant(firstName, lastName, group, averageMark, scienceWork){
  Student.call(this, firstName, lastName, group, averageMark);
  this.scienceWork = scienceWork;

  this.getScholarship = function(){
    if(this.averageMark === 10){
      return '200 руб.';
    } else{
      return '180 рую.';
    }
  }
};

 var student = new Student('Peter', 'petrov', 2, 9.9);
 //console.log(student);
// console.log(student.getScholarship());

 var aspirant = new Aspirant('Nick', 'Nicksov', 4, 9.8, 'Work 123');
 console.log(aspirant);
 var aspirant1 = new Aspirant('Nick1', 'Nicksov2', 2, 9.8, 'Work 123');
 console.log(aspirant1);
// console.log(aspirant.getScholarship());