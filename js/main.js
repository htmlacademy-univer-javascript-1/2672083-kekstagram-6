import { generatePhotosArray } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import { initFormValidation } from './form-validation.js';
// Генерируем массив фотографий
const photosArray = generatePhotosArray();
// Вызываем функцию отрисовки
renderThumbnails(photosArray);
// Инициализация валидации формы
initFormValidation();
