function generatePhotosArray() {
  const photos = [];
  const commentIds = new Set();

  // Константы из условия задачи
  const PHOTOS_COUNT = 25;
  const MIN_LIKES = 15;
  const MAX_LIKES = 200;
  const MIN_COMMENTS = 0;
  const MAX_COMMENTS = 30;
  const MIN_AVATAR = 1;
  const MAX_AVATAR = 6;

  // Массив возможных описаний фотографий
  const descriptions = [
    'Прекрасный закат на море',
    'Горный пейзаж в утреннем тумане',
    'Улицы старого города',
    'Архитектура современного мегаполиса',
    'Лесная тропинка после дождя',
    'Цветущий сад весной',
    'Зимний пейзаж с заснеженными деревьями',
    'Городской парк в солнечный день',
    'Морской берег с белым песком',
    'Горная река с кристально чистой водой',
    'Уличное кафе в европейском стиле',
    'Ночной город с огнями',
    'Осенний лес с разноцветными листьями',
    'Поля с подсолнухами',
    'Архитектурный памятник истории',
    'Сельский пейзаж с домиками',
    'Городская набережная',
    'Горный водопад',
    'Пляж с пальмами',
    'Улочки с граффити',
    'Старый мост через реку',
    'Современный небоскреб',
    'Церковь с золотыми куполами',
    'Поле с лавандой',
    'Городской фонтан'
  ];

  // Массив возможных сообщений для комментариев
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  // Массив имен для комментаторов
  const names = [
    'Артём', 'Мария', 'Алексей', 'Елена', 'Дмитрий',
    'Ольга', 'Сергей', 'Анна', 'Иван', 'Наталья',
    'Павел', 'Юлия', 'Михаил', 'Екатерина', 'Андрей',
    'Виктория', 'Николай', 'Светлана', 'Владимир', 'Татьяна'
  ];

  // Функция для генерации случайного числа в диапазоне
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция для генерации уникального ID для комментария
  function generateCommentId() {
    let id;
    do {
      id = getRandomInt(1, 1000);
    } while (commentIds.has(id));
    commentIds.add(id);
    return id;
  }

  // Функция для генерации комментариев
  function generateComments() {
    const commentsCount = getRandomInt(MIN_COMMENTS, MAX_COMMENTS);
    const comments = [];

    for (let i = 0; i < commentsCount; i++) {
      // Выбираем случайное количество предложений (1 или 2)
      const sentencesCount = getRandomInt(1, 2);
      let message = '';

      if (sentencesCount === 1) {
        // Одно случайное предложение
        message = messages[getRandomInt(0, messages.length - 1)];
      } else {
        // Два случайных предложения (убедимся, что они разные)
        const firstIndex = getRandomInt(0, messages.length - 1);
        let secondIndex;
        do {
          secondIndex = getRandomInt(0, messages.length - 1);
        } while (secondIndex === firstIndex);
        message = `${messages[firstIndex]} ${messages[secondIndex]}`;
      }

      comments.push({
        id: generateCommentId(),
        avatar: `img/avatar-${getRandomInt(MIN_AVATAR, MAX_AVATAR)}.svg`,
        message: message,
        name: names[getRandomInt(0, names.length - 1)]
      });
    }

    return comments;
  }

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptions[i - 1],
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: generateComments()
    };

    photos.push(photo);
  }

  return photos;
}

// Создаем массив фотографий
const photosArray = generatePhotosArray();

