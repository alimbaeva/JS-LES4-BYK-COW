//  создовать объекты автоматически
// функция конструктор - это функцмя на основе которой создает объект, то есть 
// это функция генерирует свойства объекта


function Car(title, price, year) {
    this.title = title;
    this.price = price;
    this.year = year;
    this.show = function () {
        console.log('автомобиль ' + this.title + ' стоит ' + this.price);
    }
    // this.show();
}

function getMaxPrice(mas) {
    var max = mas[0]; // пусть первый элемент массива содержит мачимальну стримость
    for (var i = 1; i < mas.length; i++) {
        if (mas[i].price > max.price) {
            max = mas[i];
        }
    }
    return max
}



car2.stop() = function () {
    console.log('Двигатель автомобиля' + this.title + 'заглушон');
}

var car = new Car('audio', 1000, 2021); // оператор new берет память для Car, без него этот функция не работает
var car2 = new Car('bmv', 1200, 2020);
var car3 = new Car('lexus', 900, 2018);


var cars = [car, car2, car3];

//добавить новый элемент
car.push(new Car('shkoda', 950, 2021));


for (var car of cars) {
    car.show();
}
car.show();

console.log(car2);

//ишем самую дорогую машину

console.log(getMaxPrice(cars).title);