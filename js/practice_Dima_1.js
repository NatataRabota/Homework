// function checkStorage(available, ordered) {
  // Пиши код ниже этой строки

  // if (ordered === 0){
  //   return 'В заказе еще нет товаров';
  // }
  //   return 'Слишком большой заказ, на складе недостаточно товаров!'; 
  //   return 'Заказ оформлен, с вами свяжется менеджер'; 
  
  // Пиши код выше этой строки
// }



// Task 1 

// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// Task 2

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа 
// попадает это число (в первую, вторую, третью или четвертую).
// let min = 18;

// let min = 45;
// if (min < 15){
//   console.log("первая четветь");
// } else if (min > 15 && min < 30) {
//   console.log("вторая четветь");
// } else if (min > 30 && min < 45) {
//   console.log("третья четветь");
// } else {
//   console.log("третья четветь");
// }



// Task 3

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет 
// значение '1', то в переменную result запишем 'зима', если имеет значение 
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = 1; 

// switch (num) {
//   case 1:
//     alert('зима');
//     break;

//     case 2:
//     alert('весна');
//     break;

//     case 3:
//     alert('лето');
//     break;

//     case 4:
//     alert('осень');
//     break;

//     default: alert('непонятно что');
// }



// Task 4
// воспользуемся циклом while и выведите в консоль числа от 0 до 50




// Task 5
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
// пока посетитель нe нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. 
// Ввод добавляется к значению переменной total. 
// Операция ввода числа продолжается 
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как 
// пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 
// 'Общая сумма чисел равна [сумма]'.
// Сделать проверку на то что пользователь ввел именно число.

// let input;
// let total = 0;

// while (true) {
//   input = prompt('введите число');
//   total += +input;
//   if (input === null){
//     break;
//   }
  
//   if (isNaN(input)) {
//     alert ('не число');
//   }

//   if (!isNaN(input)) {
//     total += +input;
// }
// console.log(total);




// Task 6 
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser;
// browser = prompt('введите название браузера', 'Safari');
//   if (browser === 'Edge') {
//     alert( "You've got the Edge!" );
//   } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else alert( 'We hope that this page looks ok!' );
// console.log(browser);



// Task 7
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i+=2) {
  
//   console.log(i);
// }



// Task 8
// Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку 
// нечисловых строк в этой задаче необязательно.

// let input;
// while(true) {
//   input = +prompt('введите число, большее 100');
//   if (input === null || input > 100) {
//     break;
//   }

//   if (input <100) {
//     alert ('введите повторно');
//   }
// }