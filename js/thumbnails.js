import { photosArray } from './main.js';

//функция для отрисовки миниатюр
function renderThumbnails() {
  const container = document.querySelector('.pictures');
  const template = document.querySelector('#picture');
  const fragment = document.createDocumentFragment();

  // Очищаем контейнер
  container.innerHTML = '';

  // Создаем и добавляем все миниатюры
  photosArray.forEach((photo) => {
    const thumbnail = template.content.querySelector('.picture').cloneNode(true);

    const img = thumbnail.querySelector('.picture__img');
    const likes = thumbnail.querySelector('.picture__likes');
    const comments = thumbnail.querySelector('.picture__comments');

    img.src = photo.url;
    img.alt = photo.description;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;

    // Сохраняем ID
    thumbnail.dataset.id = photo.id;

    fragment.appendChild(thumbnail);
  });

  container.appendChild(fragment);
}

export { renderThumbnails };
