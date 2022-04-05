/*1. Верните сумму всех элементов в массиве, где каждый элемент умножается на его индекс (отсчитываемый от нуля). Для пустых массивов верните 0.



indexMulSum([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMulSum([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)

 */
function indexMulSum(array){
  return array.reduce((sum,current,index) => sum + current * index,0);
}
console.log(indexMulSum([-3, 0, 8, -6]));





  






/* 2. Напишите функцию, которая принимает массив объектов (продуктов), который вычисляет общую цену и возвращает ее в виде числа. У продуктового объекта есть продукт, количество и цена, например:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

// 1 бутылка молока
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 бутылка молока & 1 коробка крупы
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 бутылки молока
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Несколько продуктов
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Немного конфет
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

 */















/*

3. Напишите функцию, которая принимает массив элементов, удаляет все повторяющиеся элементы и возвращает новый массив в том же последовательном порядке, что и старый массив (за вычетом дубликатов).

*/


/* 
removeDups([0, 1, 0, 1]) ➞ [0, 1]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["Tom", "Joe", "Tom"]) ➞ ["Tom", "Joe"]

*/


















/* 
4. Напишите функцию, которая возвращает ближайшую главу к текущей странице, на которой вы находитесь. Если две главы одинаково близки, верните ту, у которой страница больше.


nearestСhapter({
    "Chapter 1" : 3,
    "Chapter 2" : 17,
    "Chapter 3" : 43
  }, 10) ➞ "Chapter 2"
  
  
nearestСhapter({
    "New Beginnings" : 7,
    "Strange Developments" : 46,
    "The End?" : 187,
    "The True Ending" : 520
  }, 200) ➞ "The End?"
  
  
nearestСhapter({
    "Chapter 1a" : 1,
    "Chapter 1b" : 5
  }, 3) ➞ "Chapter 1b"
 */







