const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function isPalindrome(string) {
  const text = string.toLowerCase().split(' ').join('');
  const reversed = text.split('').reverse().join('');

  return text === reversed;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');

function isMeetingPossible(workStart, workEnd, meetingStart, meetingDuration) {
  // Функция для преобразования времени в минуты
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);

  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

isMeetingPossible('08:00', '17:30', '14:00', 90); // true
isMeetingPossible('8:0', '10:0', '8:0', 120);  // true
isMeetingPossible('08:00', '14:30', '14:00', 90); // false
isMeetingPossible('14:00', '17:30', '08:0', 90);  // false
isMeetingPossible('8:00', '17:30', '08:00', 900); // false
