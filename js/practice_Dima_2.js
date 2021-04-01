// Task 1
// Добавить метод getinfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man',

// getinfo = function(){
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}`
// };

// }
// console.log(user.getinfo());


// Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

// const obj = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black',
// }

// // function getBool(key){
// //     for (const key2 in obj){
// //         if (key === key2){
// //             return true;
        
// //         }
// //     }
// //     return false;
// // }
// const getBool = (key) => key in obj
// console.log(getBool('name'));
// console.log(getBool('fhjhh'))



// Task 3
// Нужно перебрать объект и вывести имя лучшего сотрудника
// *решить в одну строку
// function findBestEmployee(obj){
//     let numb = 0;
//     let name = '';
//   for (const key in obj){
//     if (obj[key] > numb){
//         numb = obj[key];
//         name = key;
//     }
//   }
//   return name;
// }


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux


// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать 
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj2 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

// const obj1 = {
//     'my name': 'John',
//     'i like my work': true,
//     'programming languages': ['js', 'java', 'c++']
// }
// function chekMassive(obj){
//     const obj2 = {...obj};
//     for (let key in obj2) {
//         if (Array.isArray(obj2[key])){
//             console.log(key)
//             for (let element of obj2[key])
//               obj2[`I like ${element}`] = element
//         }
//     }
//     return obj2
// }
// console.log(chekMassive(obj1))

// const user = {
//     'name John': 'John'
// }
// // user.newName = 'Peter';
// const name = 'name John';
// console.log(user[name])


// Task 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните 
// // результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.

// function sumSalarie(obj){
//     let sum = 0;
//     for (const value in obj){
//         sum += obj[value];
//     }
//     return sum;
// }

// console.log(sumSalarie(salaries))


// Task 6
// Вернуть новый массив соседних чисел (22+11+35+12+23+34)
// const sumArr = [22, 11, 35, 12, 23, 34]
// const sumArr = ['22', '11', '35', '12', '23', '34']

// function sum(arr){
//     const newArr = [];
//       for (let i = 0; i <= arr.length; i +=2) {
//         //   console.log(arr[i+1]);
//           newArr.push(+arr[i] + +arr[i+1]);
//       }
//       return newArr
// }
// console.log(sum(sumArr));


// Task 7
// const arr = ['2232', ['Hello', 'world'], 777, ['new array', ['some array', ['next level']]]]

// console.log(arr.join(',').split(','))



// Task 8
// const arr = [12, 24, 36, 48, 60]
// console.log(arr.reverse())


// Как под 0вым индексом поменять название карточки в массиве объектов
cards [0].name = 'hello';
console.log(`name is ${card.name}`)