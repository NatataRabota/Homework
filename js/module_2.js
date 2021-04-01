// ----------------------------Task 19 Module 2----------------------------
// Итерация по массиву

// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// for (let i = 0; i < fruits.length; i+=1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }


// ----------------------------Task 20 Module 2----------------------------
// Подсчёт суммы покупки

// Напиши функцию calculateTotalPrice(order), 
// которая принимает один параметр order - массив чисел, 
// и рассчитывает общую сумму его элементов. 
// Общая сумма элементов должна сохраняться в переменной total, 
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const item of order) {
//       total += item;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12,85,37,4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// ----------------------------Task 21 Module 2----------------------------
// Поиск самого длинного слова

// Напиши фукцнию findLongestWord(string) которая принимает
//  произвольную строку состоящую только из слов разделённых 
//  пробелом (параметр string) и возвращает самое длинное слово 
//  в этой строке.

// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longestWord = words[0];
    
//     for (const word of words) {
//       if(word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }  
//     return longestWord;
//   }
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//   console.log(findLongestWord('Google do a roll'));
//   console.log(findLongestWord('May the force be with you'));


// ----------------------------Task 21 Module 2----------------------------
// Поиск самого длинного слова

// Метод push() позволяет добавить один или несколько элементов 
// в конец массива, без необходимости указывать индексы добавляемых
// элементов.

// Дополни код функции createArrayOfNumbers(min, max) так, 
// чтобы она возвращала массив всех целых чисел от значения 
// min до max.

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//     for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
    
//     return longestWord;
//   }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')) // jumped.
// console.log(findLongestWord('Google do a roll')) // Google.
// console.log(findLongestWord('May the force be with you')) // force.
// console.log(findLongestWord()) // со случайной строкой возвращает правильное значение.



// ----------------------------Task 22 Module 2----------------------------
// Метод push() 


// ----------------------------Task 23 Module 2----------------------------
// Метод push() Фильтрация массива чисел


// ----------------------------Task 24 Module 2----------------------------
// Метод includes()

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
// и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// return fruits.includes(fruit);
// }

// console.log(checkFruit('слива')) // true.
// console.log(checkFruit('мандарин')) // false.
// console.log(checkFruit('груша')) // true.
// console.log(checkFruit('Груша')) // false.
// console.log(checkFruit('яблоко')) // true.
// console.log(checkFruit()) // со случайным словом возвращает правильное значение boolean.)


// ----------------------------Task 25 Module 2----------------------------
// Общие элементы (...args)

// Напиши функцию getCommonElements(array1, array2) которая получает два массива
// произвольной длины в параметры array1 и array2, и возвращает новый массив, 
// состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // console.log(array1);
//   // console.log(array2);
//   const newElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)){
//     newElements.push(element);
//     }
//   }
//   return newElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]))//  [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) //  [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) //  [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) //  [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])) //  [].
// console.log(getCommonElements()) // со случайными двумя массивами возвращает правильный массив.)


// ----------------------------Task 26 Module 2----------------------------
// Цикл for...of

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const value of order) {
//     total += value;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) //  138
// console.log(calculateTotalPrice([164, 48, 291])) //  503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) //  1116
// console.log(calculateTotalPrice([])) // 0
// console.log(calculateTotalPrice()) // со случайным массивом чисел возвращает правильную сумму


// ----------------------------Task 27 Module 2----------------------------
// Фильтрация массива чисел 2.0

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) // [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)) // [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)) // [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)) // [24, 41, 76].
// console.log(filterArray()) // со случайным массивом и числом возвращает правильный массив.


// ----------------------------Task 28 Module 2----------------------------
// Оператор %

// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;


// ----------------------------Task 29 Module 2----------------------------
// Чётные числа

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех 
// чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// function getEvenNumbers(start, end) {

// let numbers = [];
// for (let number = start; number <= end; number += 1) {
//   if ([number]%2===0) {
//     numbers.push(number);
//   }
// }
//   return numbers;
// }

// console.log(getEvenNumbers(2, 5)) // [2, 4].
// console.log(getEvenNumbers(3, 11)) // [4, 6, 8, 10].
// console.log(getEvenNumbers(6, 12)) // [6, 8, 10, 12].
// console.log(getEvenNumbers(8, 8)) // [8].
// console.log(getEvenNumbers(7, 7)) // [].
// console.log(getEvenNumbers()) // со случайными start и end возвращает правильный массив.


// ----------------------------Task 30 Module 2----------------------------
// Оператор break

// Дополни код так, чтобы в переменную number записывалось первое число от start до end, 
// которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   break;  
//   }
// }


// ----------------------------Task 32 Module 2----------------------------
// Функция includes()

// Напиши функцию includes(array, value), которая делает тоже самое, что и 
// метод массива массив.includes(значение) - проверяет, есть ли в массиве array 
// значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать 
// метод массив.includes(значение).

// function includes(array, value) {
//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }  


