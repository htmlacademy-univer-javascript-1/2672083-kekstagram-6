import { generatePhotosArray } from './data.js';
import { renderThumbnails } from './thumbnails.js';

// Генерируем массив фотографий
const photosArray = generatePhotosArray();

// Вызываем функцию отрисовки
renderThumbnails(photosArray);
