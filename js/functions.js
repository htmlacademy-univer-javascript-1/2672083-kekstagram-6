function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

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
