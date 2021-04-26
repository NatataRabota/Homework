// ----------------------------Task 1 Module 6----------------------------
// Метод forEach(callback)

// Функция calculateTotalPrice(orderedItems) принимает один параметр 
// orderedItems - массив чисел, и рассчитывает общую сумму его элементов, 
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   console.log(totalPrice += orderedItems[i];
//     // }
//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//       });
//     // Пиши код выше этой строки
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// ----------------------------Task 2 Module 6----------------------------
// Задача. Фильтрация массива чисел

// Функция filterArray(numbers, value) принимает массив чисел numbers и 
// возвращает новый массив, в котором будут только те элементы оригинального массива, 
// которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number) {
//     if (number > value) {
//           filteredNumbers.push(number);
//         }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// ----------------------------Task 3 Module 6----------------------------
// Задача. Общие элементы

// Функция getCommonElements(firstArray, secondArray) принимает два массива 
// произвольной длины в параметры firstArray и secondArray, и возвращает 
// новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
  // Пиши код ниже этой строки
  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//           commonElements.push(element);
//         }
//   })

//   return commonElements;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



// ----------------------------Task 4 Module 6----------------------------
// Стрелочные функции.

// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// // function calculateTotalPrice(quantity, pricePerItem) {

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }


// ----------------------------Task 5 Module 6----------------------------
// Неявный возврат

// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки



// ----------------------------Task 6 Module 6----------------------------
// Стрелочные функции как коллбеки

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её 
// объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод 
// forEach() на стрелочную функцию.

// // BEFORE
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // AFTER
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }



// ----------------------------Task 7 Module 6----------------------------
// Задача. Фильтрация массива чисел 2.0

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // BEFORE
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }

//   // AFTER
//   const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
//   return filteredNumbers;
// }



// ----------------------------Task 8 Module 6----------------------------
// Задача. Общие элементы 2.0

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// // BEFORE
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }

// // AFTER
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }



// ----------------------------Task 9 Module 6----------------------------
// Чистые функции

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет 
// каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив 
// чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //   }
// // }

// // Пиши код ниже этой строки
// const newArray = [];
//   	for (let i = 0; i < numbers.length; i += 1) {
//   	  if (numbers[i] % 2 === 0) {
//     	newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//   	}
//   }
// return newArray;
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


// ----------------------------Task 10 Module 6----------------------------
// Метод map()

// Дополни код так, чтобы в переменной planetsLengths получился массив 
// длин названий планет. Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// // const planetsLengths = planets;

// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);


// ----------------------------Task 11 Module 6----------------------------
// Метод map() и массив объектов

// // Используя метод map() сделай так, чтобы в переменной titles получился 
// // массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки
// const titles = books.map(book => book.title);
//   console.log(titles);


// ----------------------------Task 12 Module 6----------------------------
// Метод flatMap()

// Используя метод flatMap() сделай так, чтобы в переменной genres получился 
// массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);


// ----------------------------Task 13 Module 6----------------------------
// Задача. Имена пользователей

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён 
// пользователей (свойство name) из массива объектов в параметре users.
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Пиши код ниже этой строки
// const getUserNames = users => 
//     users.map(user => user.name);

// // Пиши код выше этой строки



// ----------------------------Task 14 Module 6----------------------------
// Задача. Почты пользователей

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив 
// почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// // Пиши код ниже этой строки
// const getUserEmails = users => 
//   users.map(user => user.email);

// // Пиши код выше этой строки


// ----------------------------Task 15 Module 6----------------------------
// Методы filter и find

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел 
// из массива numbers, а в переменной oddNumbers массив нечётных.

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// ----------------------------Task 16 Module 6----------------------------
// Фильтрация уникальных элементов

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг 
// (свойство genres) из массива books, а в переменной uniqueGenres массив 
// уникальных жанров - без повторений.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
//     );


// ----------------------------Task 17 Module 6----------------------------
// Метод filter() и массив объектов

// Используя метод filter() дополни код так, чтобы:

// // В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) 
// // больше либо равно значению переменной MIN_RATING.
// // В переменной booksByAuthor получился массив книг написанных автором с именем 
// // (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR); 


// ----------------------------Task 18 Module 6----------------------------
// Задача. Пользователи с цветом глаз

// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Дополни функцию getUsersWithEyeColor(users, color) так, 
// // чтобы она возвращала массив пользователей у которых 
// // цвет глаз (свойство eyeColor) совпадает со значением 
// // параметра color.

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => 
//  users.filter((user) => user.eyeColor === color);

// // Пиши код выше этой строки


// ----------------------------Task 19 Module 6----------------------------
// Задача. Пользователи в возрастной категории

// // Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
// // Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она 
// // возвращала массив пользователей, возраст которых (свойство age) попадает 
// // в промежуток от minAge до maxAge.

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age >= minAge && user.age <= maxAge);
// // Пиши код выше этой строки


// ----------------------------Task 20 Module 6----------------------------
// Задача. Пользователи с другом

// // Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]

// // Дополни функцию getUsersWithFriend(users, friendName) так, 
// // чтобы она возвращала массив пользователей у которых есть друг 
// // с именем в параметре friendName. 
// // Массив друзей пользователя хранится в свойстве friends.

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => 
// users.filter((user) => user.friends.includes(friendName));

// // Пиши код выше этой строки


// ----------------------------Task 21 Module 6----------------------------
// Задача. Список друзей

// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

// Дополни функцию getFriends(users) так, чтобы она 
// возвращала массив друзей всех пользователей 
// (свойство friends). У нескольких пользователей 
// могут быть одинаковые друзья, сделай так чтобы 
// возвращаемый массив не содержал повторений.

// Пиши код ниже этой строки
// const getFriends = (users) => {
//   return users.flatMap((user) => user.friends)
//     .filter((friend, index, array) =>
//       array.indexOf(friend) === index);
// };
// Пиши код выше этой строки
// console.log(getFriends(users));


// ----------------------------Task 22 Module 6----------------------------
// Задача. Список друзей

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив 
// активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) =>
//   users.filter(user => user.isActive);

// console.log(getActiveUsers);


// ----------------------------Task 23 Module 6----------------------------
// Задача. Неактивные пользователи

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив 
// неактивных пользователей, значение свойства isActive которых false.

// const getActiveUsers = (users) =>
//   users.filter(user => !user.isActive);


// ----------------------------Task 24 Module 6----------------------------
// Метод find()

// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой
//   (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который
//   (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);



// ----------------------------Task 25 Module 6----------------------------
// Задача. Пользователь с почтой

// // Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала 
// // объект пользователя, почта которого(свойство email) совпадает со значением
// // параметра email.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => 
// users.find((user) => user.email === email);
// // Пиши код выше этой строки


// ----------------------------Task 26 Module 6----------------------------
// Метод every()

// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


// // const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0);
// // console.log('~ eachElementInFirstIsEven', eachElementInFirstIsEven);
// // const eachElementInFirstIsOdd = firstArray.every(num => num % 2 !== 0);
// // console.log('~ eachElementInFirstIsOdd', eachElementInFirstIsOdd);

// // const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
// // console.log('~ eachElementInSecondIsEven', eachElementInSecondIsEven);
// // const eachElementInSecondIsOdd = secondArray.every(num => num % 2 !== 0);
// // console.log('~ eachElementInSecondIsOdd', eachElementInSecondIsOdd);

// // const eachElementInThirdIsEven = thirdArray.every(num => num % 2 === 0);
// // console.log('~ eachElementInThirdIsEven', eachElementInThirdIsEven);
// // const eachElementInThirdIsOdd = thirdArray.every(num => num % 2 !== 0);
// // console.log('~ eachElementInThirdIsOdd', eachElementInThirdIsOdd);



// ----------------------------Task 27 Module 6----------------------------
// // Задача. Все ли пользователи активны

// // Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Дополни функцию isEveryUserActive(users) так,
// //   чтобы она проверяла все ли пользователи сейчас
// // активны(свойство isActive) и возвращала true или false.

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };
// // Пиши код выше этой строки


// ----------------------------Task 28 Module 6----------------------------
// Метод some()

// // Используя метод some() дополни код так, чтобы:
// // В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// // В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// // В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// // В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// // В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// // В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);


// ----------------------------Task 29 Module 6----------------------------
// Задача. Есть ли активные пользователи

// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Дополни функцию isAnyUserActive(users) так, 
// // чтобы она проверяла наличие активных пользователей
// // (свойство isActive) и возвращала true или false.

// // Пиши код ниже этой строки
// const isAnyUserActive = users =>
//   users.some(user => user.isActive);
// // Пиши код выше этой строки



// ----------------------------Task 30 Module 6----------------------------
// Метод reduce()

// Игровому сервису необходим функционал подсчёта среднего времени 
// проведённого в играх.Дополни код так, чтобы в переменной totalPlayTime
// получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc,value) => {
//   return acc + value;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;


// ----------------------------Task 31 Module 6----------------------------
// Метод reduce() и массив объектов

// // Нашему сервису необходимо рассчитать среднее время проведённое в одной 
// // игре для каждого игрока, и получить общую сумму этих времён.Рассчитать
// // время для каждого из игроков, можно разделив его время(свойство playtime)
// // на количество игр(свойство gamesPlayed).

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0,
// );

// console.log('~ totalAveragePlaytimePerGame', totalAveragePlaytimePerGame);



// ----------------------------Task 32 Module 6----------------------------
// // Задача. Общий баланс пользователей

// // Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Дополни функцию calculateTotalBalance(users) так,
// // чтобы она считала и возвращала сумму всех средств
// // (свойство balance) которые хранят пользователи
// // из массива users.

// // Пиши код ниже этой строки
// const calculateTotalBalance = users =>
//   users.reduce((acc, user) => acc + user.balance,
//     0,
//   );
// // Пиши код выше этой строки



// ----------------------------Task 33 Module 6----------------------------
// // Задача. Общее количество друзей

// // Дополни функцию getTotalFriendCount(users) так, чтобы она считала и 
// // возвращала общее количество друзей(свойство friends) всех пользователей
// // из массива users.

// const getTotalFriendCount = users => {
//   return users.reduce((acc, user) => acc + users.friends.length,
//     0,
//   );
// };


// ----------------------------Task 34 Module 6----------------------------
// // Метод sort()

// // Дополни код так, чтобы в переменной ascendingReleaseDates получилась 
// // отсортированная по возрастанию копия массива releaseDates, а в переменной
// // alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


// ----------------------------Task 35 Module 6----------------------------
// Свой порядок сортировки чисел

// // Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, 
// // по её возрастанию или убыванию.Дополни код так, чтобы в переменной ascendingReleaseDates
// // получилась отсортированная по возрастанию копия массива releaseDates, а в переменной
// // descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// ----------------------------Task 36 Module 6----------------------------
// Свой порядок сортировки строк

// // Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, 
// // в алфавитном и обратном алфавитном порядке.Дополни код так, чтобы в переменной
// // authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива
// // authors, а в переменной authorsInReversedOrder копия отсортированная в обратном
// // алфавитном порядке.

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);


// ----------------------------Task 37 Module 6----------------------------
// Сортировка объектов

// // Дополни код так, чтобы:
// // В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// // В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// // В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// // В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки
// const sortedByAuthorName = [...books].sort(
//   (firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort(
//   (firstAuthor, secondAuthor) =>  secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort(
//   (firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating);

// const sortedByDescentingRating = [...books].sort(
//   (firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating);



// ----------------------------Task 38 Module 6----------------------------
// Задача. Сортировка по балансу

// // Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала 
// // массив пользователей отсортированный по возрастанию их баланса(свойство balance).

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };
// // Пиши код выше этой строки
// console.log(sortByAscendingBalance.users);



// ----------------------------Task 39 Module 6----------------------------
// Задача. Сортировка по количеству друзей

// // Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала 
// // массив пользователей отсортированный по убыванию количества их друзей(свойство friends).

// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Пиши код выше этой строки
// console.log(sortByDescendingFriendCount(users));



// ----------------------------Task 40 Module 6----------------------------
// Задача. Сортировка по имени

// Дополни функцию sortByName(users) так, чтобы она возвращала массив 
// пользователей отсортированный по их имени(свойство name) в алфавитном порядке.

// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// console.log(sortByName(users));



// ----------------------------Task 41 Module 6----------------------------
// Цепочки методов (чейнинг, chaining)

// // Дополни код так, чтобы в переменной names получился массив имён авторов 
// // в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
// .filter((book) => book.rating > MIN_BOOK_RATING)
// .map((book) => book.author)
// .sort((a, b) => a.localeCompare(b));

// console.log('~ names', names);



// ----------------------------Task 42 Module 6----------------------------
// // Задача. Пользователи и друзья

// // Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она 
// // возвращала массив имён пользователей отсортированный по возрастанию
// // количества их друзей (свойство friends)

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// const getNamesSortedByFriendCount = users => {
//   return [...users]
//   .sort((a, b) => a.friends.length - b.friends.length)
//   .map((user) => user.name)
// };

// console.log(getNamesSortedByFriendCount(users));



// ----------------------------Task 43 Module 6----------------------------
// // Задача. Имена друзей

// // Дополни функцию getSortedFriends(users) так, чтобы она возвращала 
// // массив уникальных имён друзей(свойство friends) отсортированный по алфавиту

// const getSortedFriends = users => {
//    return [...users]
//   .flatMap(user => user.friends)
//   .filter((name, index, arr) => arr.indexOf(name) === index)
//   .sort((a, b) => a.localeCompare(b))
// };

// console.log(getSortedFriends(users));



// ----------------------------Task 44 Module 6----------------------------
// Задача. Общий баланс

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она 
// возвращала общий баланс пользователей(свойство balance), пол которых(свойство gender)
// совпадает со значением параметра gender

const getTotalBalanceByGender = (users, gender) => {
   return users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};
console.log(getTotalBalanceByGender(users, 'female'));