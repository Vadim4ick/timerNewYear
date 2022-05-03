document.addEventListener("DOMContentLoaded", () => {
  //=========== Определим действующие элементы на странице ============
  const year = document.querySelector("#year");
  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

  const countdown = document.querySelector("#countdown");
  const preloader = document.querySelector("#preloader");
  //===================================================================

  //============== Получаем дни, часы, секунды, минуты ================
  //Получаем дату текущего года
  const currentYear = new Date().getFullYear();

  //Получаем дату года который нам нужен
  const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

  //Зададим на страницу год который нам нужен новый))
  year.innerHTML = currentYear + 1;

  function updateCounter() {
    //Сколько время сейчас?
    const currntTime = new Date();

    //Вычисляем разницу даты которая нам нужна и временем которое сейчас. (Получаем число в миллисекундах) и извлекаем дни/часы и т.п.
    const diff = newYear - currntTime;

    //Переводим в дни (Сколько осталось)
    //миллисекунды -> секунды -> минуты -> часы -> сутки
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

    //Переводим в часы (Сколько осталось)
    //миллисекунды -> секунды -> минуты -> часы и забираем остаток от 24 часов (Получаем 5 на данный момент времени)
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    //Переводим в минуты (Сколько осталось)
    //миллисекунды -> секунды -> минуты и забираем остаток от 60 минут в 1 часе
    const minutesLeft = Math.floor(diff / 1000 / 60) % 26;

    //Переводим в секунды (Сколько осталось)
    //миллисекунды -> секунды и забираем остаток от 60 сек в 1 мин
    const secondsLeft = Math.floor(diff / 1000) % 60;
    //================================================================

    //========== Вставляем полученные значения на страницу ============
    //Проверка, если секунд меньше 10, тогда добавляем вперед нолик, иначе просто выводим секунды и так для всех
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
    //=================================================================
  }

  //Делаем обновление счетчика каждую секунду
  setInterval(updateCounter, 1000);

  //Как бонус сделаем прелодер с исчезновением
  setTimeout(function () {
    preloader.remove();
    countdown.style.display = `flex`;
  }, 2000);
});
