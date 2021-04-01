// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   // Пиши код ниже этой строки
//   function composeMessage(position) {
//       return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
//   }
  
//   const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//     // const message = composeMessage.call(orders[i], i +1)
//     // const message = composeMessage.bind(orders[i], i +1)()
//     const message = composeMessage.applay(orders[i], [i +1])
//     messages.push(message);
// }
// console.log(messages);


// ----------------------------2----------
// const orders = [
//         { email: 'solomon@topmail.ua', dish: 'Burger' },
//         { email: 'artemis@coldmail.net', dish: 'Pizza' },
//         { email: 'jacob@mail.com', dish: 'Taco' },
//       ];
      
//       // Пиши код ниже этой строки
//       function composeMessage(position) {
//           return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
//       }
      
//       const messages = orders.map(function (order, index) {
//         //   return composeMessage.call(order, index +1);
//     //     return composeMessage.bind(order, index +1)();
//     //   });
//     const messages = orders.map(order, index) => {
//         return composeMessage.call(order, index +1)
//     }

//       console.log(messages)


// --------------3------------
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };
// const add = inventory.add.bind(inventory)
// invokeInventoryAction('Medkit', add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// const remove = inventory.remove.bind(inventory)
// invokeInventoryAction('Gas mask', remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']



// ------------------4-------------
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
// В prototype функции-конструктора добавь метод getInfo(), 
// который выводит в консоль значения полей login и email объекта который его вызвал.

// function Account ({login, email}) {
//     this.login = login;
//     this.email = email;
// }
//     Account.prototype.getInfo = function () {
//         return `email : ${this.email} login : ${this.login}`;
//     };

    

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com



// ---------------------------------5------------------------------------
// Напиши класс Car с указанными свойствами и методами.
// class Car {
//     static getSpecs(car) {
//         console.log(`${car.maxSpeed}, ${car.speed}, ${car.isOn}, ${car.distance} и ${car.price}`)
//     }
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */
//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({price, maxSpeed}) {
//     this._price = price,
//     this.maxSpeed = maxSpeed,
//     this.speed = 0,
//     this.isOn = false,
//     this.distance = 0,
//   } 

//   get price() {
//     return this._price;
//   }

//   set price (newPrice) {
//     this._price = newPrice;
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//       this.isOn = true;
//   }
//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//       this.isOn = false;
//       this.speed = 0;
//   }
//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//       if(this.speed + value <= this.maxSpeed) {
//           this.speed = this.speed + value;
//       }
//   }
//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if(this.speed - value >= 0) {
//         this.speed = this.speed - value;
//     }
//   }
//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//       if(this.isOn) {
//       this.distance = hours * this.speed
//     }
//   }
// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000



// -------------------------6--------------------------
// Напиши класс StringBuilder. На вход он получает один параметр - строку, 
// которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// "use strict"
// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {
//         this._value = this._value + str
//     }
//     prepend(str) {
//         this._value = str + this._value
//         }
//     pad(str) {
//         this._value = str + this._value + str
//     }
//   }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='



// ---------------------7----------------------------
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(arr) {
        this.items = arr;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(elem => elem !== item);
    }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
