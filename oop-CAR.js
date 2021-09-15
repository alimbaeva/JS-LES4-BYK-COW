var car = {
    title: 'Audi',
    price: 1000,
    color: 'white',
    isEngineStarted: false
}

var car2 = {
    title: 'Audi',
    price: 1400,
    color: 'bloo',
    isEngineStarted: false
}

// car.year = 2021;
// console.log(car);

//  Добавим нашему объекту МЕТОД:

// car.start = startEngine(); // когда мы в функции ставим скобки мы ее запускаем а не присваиваем!!! поэтому глобально ему присваивается переменная windows

car.start = startEngine; // мы присвоили функцию !!
// function startEngine() {
//     // if (!car.isEngineStarted) {      - так писать код не правильно, так как оно
//     //     car.isEngineStarted = true;  - оно обращаеться только к одному обьекту.
//     // }

//     console.log(this); // this - это ссылка на объект, который запускает функцию


//  переделываем строку от 23 -28

function startEngine() {
    if (!this.isEngineStarted) {
        this.isEngineStarted = true;
        console.log('Автомобиль' + this.title + ' запушен');
    }
}


car.start(); //запустили функцию, теперь this- это наш объект car
car2.start()


// Функцию сделаем методом:---------------------------------

var car = {
    title: 'Audi',
    price: 1000,
    color: 'white',
    isEngineStarted: false,
    show: function () {
        console.log('Автомобиль' + this.title + 'стоит' + this.price);
    }
}

var car2 = {
    title: 'Audi',
    price: 1400,
    color: 'bloo',
    isEngineStarted: false
}

car.show(); //взвали функцию созданную внутри объекта car
car2.show = car.show; //car делиться с функцией show car2, тоесть мы присваеваем 1 фенкцию к другому
car2.show();


car.stop = function () {
    if (this.isEngineStarted) {
        this.isEngineStarted = false;
        console.log('Автомобиль' + this.title + ' выключено');
    }
}

car.stop();
car2.stop();


///------------------МАССИВ ОБЪЕКТА


var car = {
    title: 'Audi',
    price: 1000,
    color: 'white',
    isEngineStarted: false,
}

var car2 = {
    title: 'Audi',
    price: 1400,
    color: 'bloo',
    isEngineStarted: false
}


var cars = [car, car2];

// for (var item of cars) {
//     item.show = function () {
//         console.log('Автомобиль' + this.title + ' стоит' + item.price);
//     }
//     item.show()
// }

// удалить

delete car.color;
var car3 = car;
car = null;

console.log(car3);

// car.show(); //взвали функцию созданную внутри объекта car
// car2.show = car.show; //car делиться с функцией show car2, тоесть мы присваеваем 1 фенкцию к другому
// car2.show();