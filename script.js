var number = []; // уникальные четыре цифры нашего числа
var attempts = 0; //число попыток

generatNumber(); // сгенерировали не повторяющиеся значения массива
//alert(number.join('')); //преобразование массива в строку
guessNumber();

function generatNumber() {
    var min = 1;
    var max = 9;

    // заполняем массив цифр в числе
    for (var i = 0; i < 4; i++) {
        var part = Math.round(Math.random() * (max - min) + min);

        // первое число всегда уникально
        if (i == 0) {
            number[0] = part;
            //number.push(part); // этот вариант тоже можно использовать можно
        }
        // если элементне найден в массиве то при выходе получаем -1
        else {
            // пока не сгенерируется уникальное число, генерируем новые случайные числа
            while (number.indexOf(part) != -1) {// элемент найден
                part = Math.round(Math.random() * (max - min) + min);
            }
            number[1] = part;
        }
    }
}

//  в этой функции осуществляеться сама логика игры
function guessNumber() {
    var result = prompt('Введите число (-1 - закончить игру) ');
    var gameIsRunning = true; // проверка на то , что игра идет (это флажок . тоесть логическое переменное)

    // пока игрок не угадал число
    while (gameIsRunning) { // while (gameIsRunning == true)- можно и так написать но этот запись уже устарел, чтобы проверить на фолс мы пишем  while (!gameIsRunning)- это значить отрицание, т.е  while (gameIsRunning==афдыу)
        // вычод из игры
        if (parseInt(result) == -1) {
            gameIsRunning = false;
        }
        // игрок ввел не коректные данные
        else if (parseInt(result) == 0 || isNaN(parseInt(result))) {
            alert('Вы не ввели число.');
            // запрашиваем по новой
            result = prompt('Введите число (-1 - закончить игру) ', 0);
        }
        else if (result.length != 4) {
            alert('Вы ввели не корректное число');
            // запрашиваем по новой
            result = prompt('Введите число (-1 - закончить игру) ', 0);
        }
        // проверка число
        else {
            var answer = checkNumber(result); //answer[false,1, 1]
            if (answer[0] == true) {
                //число угадано
                alert('Поздравляем: Вы угадали число, Количество попыток: ' + attempts);
                gameIsRunning = false;
            }
            else {
                //Следующий код
                result = prompt('Быки: ' + answer[1] + ' Коровы: ' + answer[2] + 'Введите число (-1 - закончить игру)', 0);
            }
        }
    }

}

function checkNumber(myresult) {//1234

    //'1234'.split('') => [1234]

    // каждая проверка увеличивает количество попыток на 1

    attempts++;

    // массив результата
    // 0 - общй результат
    // 1 - быки
    // 2 - коровы 
    var answer = [false, 0, 0];

    // раскладываем число на разряды
    console.log(myresult);
    console.log(number);

    /* 
    s='1,2,3,4';
    mas=s.split(',');
    */

    //var ranks = myresult.split(''); // массив, полученный из введенного числа


    // в этом цыкле считаем сколько быков и коров:

    for (var i = 0; i < myresult.length; i++) { //1234
        // если по индексу значения совподают, то это бык
        if (parseInt(myresult[i]) == number[i]) {
            answer[1]++;
        }
        // если число вообще есть в массиве, то это корова
        else if (number.indexOf(parseInt(myresult[i])) != -1) {
            answer[2]++;
        }
    }

    // если набралось 4 быка, то это победа
    if (answer[1] == 4) {
        answer[0] = true;
    }
    return answer;
}