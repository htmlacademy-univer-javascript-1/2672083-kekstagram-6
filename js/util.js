// Функция для генерации случайного числа в диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomInt};
