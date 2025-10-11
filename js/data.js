import {getRandomInt} from './util';
import {
  PHOTOS_COUNT,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  MESSAGES,
  NAMES,
  DESCRIPTIONS
} from './constants.js';


function generatePhotosArray() {
  const photos = [];
  const commentIds = new Set();

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
      const sentencesCount = getRandomInt(1, 2);
      let message = '';

      if (sentencesCount === 1) {
        message = MESSAGES[getRandomInt(0, MESSAGES.length - 1)];
      } else {
        const firstIndex = getRandomInt(0, MESSAGES.length - 1);
        let secondIndex;
        do {
          secondIndex = getRandomInt(0, MESSAGES.length - 1);
        } while (secondIndex === firstIndex);
        message = `${MESSAGES[firstIndex]} ${MESSAGES[secondIndex]}`;
      }

      comments.push({
        id: generateCommentId(),
        avatar: `img/avatar-${getRandomInt(MIN_AVATAR, MAX_AVATAR)}.svg`,
        message: message,
        name: NAMES [getRandomInt(0, NAMES .length - 1)]
      });
    }

    return comments;
  }

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[i - 1],
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: generateComments()
    };

    photos.push(photo);
  }

  return photos;
}

export{generatePhotosArray};
