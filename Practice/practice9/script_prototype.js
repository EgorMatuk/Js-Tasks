/* Разработка приложения “Книги”.
1. Объявить класс под названием “Book”
2. Класс “Book”. У каждой книги(созданного объекта от класса Book) есть “название”, “автор”, “количество экземпляров”, “количество страниц”.
 Есть метод который выводит количество страниц книги.
 Есть метод который считает количество глав(1 глава равна 10 страницам).


3. Класс “Journal”. У каждого журнала(созданного объекта от класса Journal)есть поля: "название", “год выпуска”, "месяц выпуска," номер выпуска”, “количество страниц”.
 Есть метод который выводит данные о количестве страниц.
 Есть метод, который выводит такие данные как: "номер выпуска", "год выпуска", "месяц выпуска".
 */


 function Book(title, countPages, author, countCopies, ){
     this.title = title;
     this.author = author;
     this.countCopies = countCopies;
     this.countPages = countPages;
 }

 Book.prototype.getCountPages = function(){
     return this.countPages;
 }

 Book.prototype.getCountChapters = function(){
     return Math.round(this.countPages / 10);
 }

 var book = new Book('Titl', 'Max', 199, 27);
 var book1 = new Book('Titl2', 'Max2', 1993, 273);
//  console.log(book);
//  console.log(book1);
//  console.log(book.getCountPages());
//  console.log(book.getCountChapters());

function Journal(title, countPages, yearProd, monthProd, numbProd){
    Book.call(this, title, countPages);
    this.yearProd = yearProd;
    this.monthProd = monthProd;
    this.numbProd = numbProd;
}

// Прототипное наследование
Journal.prototype = Object.create(Book.prototype);
Journal.prototype.constructor=Journal;


Journal.prototype.getData = function(){
    return this.yearProd + ' ' + this.monthProd + ' ' + this.numbProd;
}

var journal = new Journal('NewT', 199, 2022, 04, 10);
console.log(journal);
var journal2 = new Journal('NewT2', 1992, 2022, 04, 10);
console.log(journal2);
// console.log(journal.getCountPages());
// console.log(journal.getData())

