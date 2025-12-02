// Функция для создания элемента комментария
const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('social__picture');
  avatarImg.src = comment.avatar;
  avatarImg.alt = comment.name;
  avatarImg.width = 35;
  avatarImg.height = 35;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentElement.appendChild(avatarImg);
  commentElement.appendChild(commentText);
  return commentElement;
};


// Функция для настройки обработчиков закрытия
const setupCloseHandlers = (bigPicture) => {
  // Закрытие по крестику
  const closeButton = bigPicture.querySelector('#picture-cancel');

  function onEscKeyDown(evt) {
    if (evt.key === 'Escape') {
      closeFullscreenPhoto();
    }
  }

  function closeFullscreenPhoto() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');

    // Удаляем обработчики
    closeButton.removeEventListener('click', closeFullscreenPhoto);
    document.removeEventListener('keydown', onEscKeyDown);
  }

  // Вешаем обработчики
  closeButton.addEventListener('click', closeFullscreenPhoto);
  document.addEventListener('keydown', onEscKeyDown);
};

// Основная функция для открытия полноразмерного фото
const openFullscreenPhoto = (photo) => {
  const bigPicture = document.querySelector('.big-picture');
  const bigImage = bigPicture.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const commentsList = bigPicture.querySelector('.social__comments');

  // Находим блоки которые нужно скрыть
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const socialCommentCount = bigPicture.querySelector('.social__comment-count');

  //Заполняем данные фотографии
  bigImage.src = photo.url;
  bigImage.alt = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  // Очищаем список комментариев
  commentsList.innerHTML = '';

  // Добавляем комментарии
  photo.comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsList.appendChild(commentElement);
  });

  //Скрываем лишние блоки
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');

  bigPicture.classList.remove('hidden');

  document.body.classList.add('modal-open');
  setupCloseHandlers(bigPicture);
};

export { openFullscreenPhoto };
