const timers = document.querySelectorAll(".countdown-item > h3");
const countdownBox = document.getElementById("countdown-box");

// Дата начала продажи
let countdownDate = new Date(2023, 2, 29, 0, 0, 0).getTime();

function getCountDownTime() {
    // Текущее время
    const now = new Date().getTime();

    // Разница между текущим и датой начала продажи
    const dist = countdownDate - now;

    // Переменные в мс
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    // Подсчёт оставшегося времени
    let days = Math.floor(dist / day);
    let hours = Math.floor((dist % day) / hour);
    let minutes = Math.floor((dist % hour) / minute);
    let seconds = Math.floor((dist % minute) / 1000);

    // Массив с полученными значениями
    const values = [days, hours, minutes, seconds];
    console.log(values);

    // Вывод значений на страницу
    timers.forEach(function (item, index) {
        item.textContent = values[index];
    });

    // Остановка времени по истечении и вывод сообщения
    if (dist <= 1) {
        clearInterval(countdown);
        countdownBox.innerHTML = "<h3 class='time-out'>Время вышло!</h3>";
    }
}

// Вызов функции каждую секунду
let countdown = setInterval(getCountDownTime, 1000);

// Вызов текущего времени
getCountDownTime();