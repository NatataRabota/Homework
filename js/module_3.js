// ----------------------------Task 7 Module 3----------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = location;
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';

// console.log(apartment.area)
// console.log(apartment.rooms)
// console.log(apartment.location.country)
// console.log(apartment.location.city)


// ----------------------------Task 10 Module 3----------------------------
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки

//   for (const key in apartment){
//     keys.push(key);
//     values.push(apartment[key]); 
//   }
//   console.log('key: ', apartment.key);
//   console.log('Value: ', apartment['key']);


// ----------------------------Task 11 Module 3----------------------------
// Выполни рефакторинг решения предыдущего задания добавив в цикл 
// for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Пиши код выше этой строки
// }
// console.log(apartment)



// ----------------------------Task 12 Module 3----------------------------
// Подсчёт свойств

// Напиши функцию countProps(object), которая считает и возвращает количество 
// собственных свойств объекта в параметре object. Используй переменную 
// propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
// const keys = Object.keys(object);
//   for (const key of keys){
//     if (object.hasOwnProperty(key)){
//       propCount += 1;
//     }
//   }
  
//   // Пиши код выше этой строки
//   return propCount;
// }
// console.log(countProps({}))



// ----------------------------Task 13 Module 3----------------------------
// Метод Object.keys()

// Перебери объект apartment используя метод Object.keys() и цикл for...of. 
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(apartment);


// ----------------------------Task 14 Module 3----------------------------
// Подсчёт свойств 2.0

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() 
// и, возможно, цикл for...of

// function countProps(object) {
//   // рефакторинг
//   return Object.keys(object).length;
// }
  // Изначальное условие ниже этой строки
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }
  // Пиши код выше этой строки



// ----------------------------Task 15 Module 3----------------------------
// Метод Object.values()

// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// а в переменную values массив всех значений его свойств.
// Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);



// ----------------------------Task 16 Module 3----------------------------
// Задача. Расходы на зарплату

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
// где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const values = Object.values(salaries);
//     for (const value of values){
//         totalSalary += value;
//     }
//   // Пиши код выше этой строки
//   return totalSalary;
// }



// ----------------------------Task 17 Module 3----------------------------
// Массив объектов

// Перебери массив объектов colors используя цикл for...of. 
// Добавь в массив hexColors значения свойств hex, а в массив 
// rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// console.table(colors);
// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log('hexColors: ', hexColors);
// console.log('rgbColors: ', rgbColors);




// ----------------------------Task 18 Module 3----------------------------
// Задача. Поиск объекта по значению свойства

// Напиши функцию getProductPrice(productName) которая принимает один параметр 
// productName - название продукта. Функция ищет объект продукта с таким именем 
// (свойство name) в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// console.table(products);
// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
  // const name = [];
  // for (const product of products){
    
  //   console.log(product.price);

//     if (product.name === productName){
//       return product.price;
//       }
//   }
//   return null;
// }

// console.log(getProductPrice(products, 'Радар'));
// console.log(getProductPrice(products, 'Двигатель'));



// ----------------------------Task 19 Module 3----------------------------
// Задача. Коллекция значений свойства

// Напиши функцию getAllPropValues(propName) которая принимает один параметр 
// propName - имя (ключ) свойства. Функция должна вернуть массив всех значений 
// свойства с таким именем из каждого объекта в массиве products. Если в объектах 
// нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const propValues = [];
//   for (const product of products){
//     const keys = Object.keys(product);
    
//     for (const key of keys) {
//       if (key === propName) {
//         propValues.push(product[key]);
//       }
//     }
//     // if (keys.includes(propName)) {
//     //   propValues.push(product.name);
//     // }
//   }
//  return propValues; 
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('rating'));

// ----------------------------Task 20 Module 3----------------------------
// Задача. Общая стоимость товара

// Напиши функцию calculateTotalPrice(productName) которая принимает 
// один параметр productName - название товара. Функция должна вернуть 
// общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// const totalPrice = [];
//   for (const product of products){
//     if(product.name === productName){
//       return product.price*product.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Сканер'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));
// console.log(calculateTotalPrice('Бластер'));



// ----------------------------Task 21 Module 3----------------------------
// Деструктуризация объектов

// Пришел трёхдневный прогноз максимальных температур и мы считаем 
// среднюю температуру за три дня (meanTemperature). Замени объявления 
// переменных yesterday, today и tomorrow одной операцией деструктуризации 
// свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;



// ----------------------------Task 22 Module 3----------------------------
// Значения по умолчанию

// В прогнозе максимальных температур также может быть необязательное 
// свойство icon - иконка погоды. Замени объявления переменных yesterday, 
// today, tomorrow и icon одной операцией деструктуризации свойств объекта 
// highTemperatures. Задай значение по умолчанию для icon - строку 
// 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;


// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//       } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;



// ----------------------------Task 23 Module 3----------------------------
// Изменение имени переменной

// Замени объявления переменных highYesterday, highToday, highTomorrow и 
// highIcon одной операцией деструктуризации свойств объекта highTemperatures. 
// Задай значение по умолчанию для highIcon - строку 
// 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;


// const {
// yesterday: highYesterday,
// today: highToday,
// tomorrow: highTomorrow,
// icon: highIcon  = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



// ----------------------------Task 24 Module 3----------------------------
// Деструктуризация в циклах

// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// //for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb);
// // }

// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


// ----------------------------Task 25 Module 3----------------------------
// Глубокая деструктуризация

// Мы получили прогноз погоды на два дня, с минимальными и максимальными 
// температурами, а также необязательными иконками. Замени объявления всех 
// переменных одной операцией деструктуризации свойств объекта forecast. 
// Задай значение по умолчанию для иконок, переменных todayIcon и 
// tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// // Пиши код ниже этой строки

// const {
//   today: {high: highToday, low: lowToday, 
// icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//   tomorrow: {high: highTomorrow, low: lowTomorrow, 
// icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//   } = forecast;
//   console.log(lowTomorrow);



// ----------------------------Task 26 Module 3----------------------------
// Паттерн «Объект настроек»
// Функция calculateMeanTemperature(forecast) принимает один параметр 
// forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh 
// одной операцией деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;


//   const {
//     today: {low: todayLow, high: todayHigh}, 
//     tomorrow: {low: tomorrowLow, high: tomorrowHigh}, 
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));



// ----------------------------Task 27 Module 3----------------------------
// Операция spread при передаче аргументов

// В переменной scores хранится массив результатов тестирования. 
// Используя распыление и методы Math.max() и Math.min() дополни код так, 
// чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);



// ----------------------------Task 28 Module 3----------------------------
// Операция spread при создании нового массива

// В переменных firstGroupScores, secondGroupScores и thirdGroupScores 
// хранятся результаты тестирования отдельных групп. 
// Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// // const allScores = [];
// // const bestScore = allScores;
// // const worstScore = allScores;

// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);



// ----------------------------Task 29 Module 3----------------------------
// Операция spread при создании нового объекта

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings, public: false};
// console.log(finalSettings)



// ----------------------------Task 30 Module 3----------------------------
// Задача. Карточки задач

// Напиши функцию makeTask(data) которая принимает один параметр 
// data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, 
// не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, 
// значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, 
// а остальные два, category и priority, могут отсутствовать. 
// Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения 
// по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   return  {completed, category, priority, ...data};
//   // Пиши код выше этой строки
// }
// console.log(makeTask({}));
// console.log(makeTask({category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор'}));
// console.log(makeTask({category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({priority: 'Низкий', text: 'Выбрать шампунь' }));
// console.log(makeTask({text: 'Купить хлеб'}));



// ----------------------------Task 31 Module 3----------------------------
// Операция rest для сбора всех аргументов функции

// Используя операцию rest дополни код функции add() так, чтобы она принимала 
// любое количество аргументов, считала и возвращала их сумму.

// Пиши код ниже этой строки
// function add(...args) {
//   // console.log(args)
//   let sumArg = 0;
//   for (const arg of args){
//     sumArg += arg;
//   }
//   return sumArg;
// }
//   // Пиши код выше этой строки
//   console.log(add(12, 4, 11, 48));
//   console.log(add(15, 27));
//   console.log(add(32, 6, 13, 19, 8));
//   console.log(add(74, 11, 62, 46, 12, 36));



// ----------------------------Task 32 Module 3----------------------------
// Операция rest для сбора части аргументов функции

// Функция addOverNum() считает сумму всех аргументов. Измени параметры 
// и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, 
// которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg>number){
//     total += arg;
//     }
//   }
//   return total;
// }
//   console.log(addOverNum(50, 15, 27));
//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//   console.log(addOverNum(15, 32, 6, 13, 19, 8));
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// ----------------------------Task 33 Module 3----------------------------
// Задача. Массив совпадений

// Функция findMatches() принимает произвольное количество аргументов. 
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, 
// в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], 
// потому что только они есть в массиве первого аргумента.

// function findMatches(array, ...args) {
//   const matches = []; 
//   for (const number of args) {
//     if (array.includes(number)) {
//       matches.push(number);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));



// ----------------------------Task 34 Module 3----------------------------
// Методы объекта

// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто 
// строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 
// 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> 
// и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   // Пиши код ниже этой строки
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`; 
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`; 
//   },
//   // Пиши код выше этой строки
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Мгла'));
// console.log(bookShelf.removeBook('Красный закат'));
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));



// ----------------------------Task 35 Module 3----------------------------
// Доступ к свойствам объекта в его методах

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название 
// книги с oldName на newName в свойстве books. Используй indexOf() для того, 
// чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };
// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));



// ----------------------------Task 36 Module 3----------------------------
// Задача. Лавка зелий «У старой жабы»

// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу 
// для ведения инвентаря - добавления, удаления, поиска и обновления зелий. 
// Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };



// ----------------------------Task 37 Module 3----------------------------
// Задача. Получаем все зелья

// Добавь объекту atTheOldToad метод getPotions(), который просто 
// возвращает значение свойства potions.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//     return this.potions; 
//   }
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());


// ----------------------------Task 38 Module 3----------------------------
// Задача. Добавляем новое зелье

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье 
// potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//     // Пиши код ниже этой строки
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     addPotion(potionName) {
//       this.potions.push(potionName); 
//     },
//     // Пиши код выше этой строки
//   };
//   console.log(atTheOldToad.addPotion('Невидимка'));
//   console.log(atTheOldToad.addPotion('Зелье силы'));
  
  
// ----------------------------Task 39 Module 3----------------------------
// Задача. Удаляем зелье

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье 
// potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const item = this.potions[i];

//       if (potionName === this.potions[i]) {
//         console.log(potionName);
//         this.potions.splice(i, 1);
//       }
//     }
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));



// ----------------------------Task 40 Module 3----------------------------
// Задача. Обновляем зелье

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял 
// название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));



// ----------------------------Task 41 Module 3----------------------------
// Задача. Расширяем инвентарь

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, 
// а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions 
// будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они 
// работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья 
// с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
  
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
  
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
  // updatePotionName(oldName, newName) {
  //  for (const potion of Object.values(this.potions)){
  //   if (oldName === potion.name) {
  //     potion.name = newName;
  //   }
  //  }
  // },
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));