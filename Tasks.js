'use strict'

function getStringLength(string) {
  if (typeof (string) === 'string') {
        let count = 0;
        while (string[count] !== undefined) {
            count++;
        }
        return count;
    }
  return 0;
}

function isString(string) {
  return typeof string === 'string' || string instanceof String;
}

function concatenateString(str1 , str2) {
  return str1 + str2;
}

function getFirstChar(str) {
  return typeof (str) === 'string' ? (str[0] ?? '') : false;
}

function removeLeadingAndTrailingWhitespaces(string) {
  let start = 0;
  let end = string.length - 1;

  while (start <= end && (string[start] === ' ' || string[start] === '\t' || string[start] === '\n' )) {
    ++start;
  }

  while (end >= start && (string[end] === ' ' || string[end] === '\t' || string[end] === '\n' )) {
    --end;
  }

  let result = '';
  for (let i = start; i <= end ; ++i) {
    result += string[i];
  }

  return result;
}

function removeLeadingWhitespaces(string) {
  let start = 0;
  let end = string.length;

  while (start <= end && (string[start] === ' ' || string[start] === '\t' || string[start] === '\n')) {
    ++start;
  }

  let result = '';
  for (let i = start; i <= end ; ++i){
    result += string[i];
  }

  return result;
}

function removeTrailingWhitespaces(string) {
  let end = string.length - 1;

  while (end >= start && (string[end] === ' ' || string[end] === '\t' || string[end] === '\n' )) {
    --end;
  }

  let result = '';
  for (let i = 0; i <= end ; ++i) {
    result += string[i];
  }

  return result;
}

function repeatString(string, times) {
  if (times <= 0) {
      return '';
    }

    return string.repeat(times);
}

function removeFirstOccurrences(string, value) {
  const index = string.indexOf(value);

  if (index === -1) { return string; }

  return string.slice(0, index) + string.slice(index + value.length);
}

function removeLastOccurrences(string, value) {

  const index = string.lastIndexOf(value);


  if (index === -1) {
    return string;
  }


  return string.slice(0, index) + string.slice(index + value.length);
}

function sumOfCodes(string) {
  if (typeof string !== 'string') {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

function startsWith(string, substr) {
  return string.indexOf(substr) === 0;
}

function endsWith(string, substr) {
  return string.slice(-substr.length) === substr;
}

function formatTime(minutes, seconds) {
  const mm = minutes < 10 ? '0' + minutes : '' + minutes;
  const ss = seconds < 10 ? '0' + seconds : '' + seconds;

  return mm + ':' + ss;
}

function reverseString(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; --i) {
    reversed += string[i];
  }

  return reversed;
}

function orderAlphabetically(string) {
  const chars = string.split('');

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length - 1 - i; j++) {
      if (chars[j] > chars[j + 1]) {
        const temp = chars[j];
        chars[j] = chars[j + 1];
        chars[j + 1] = temp;
      }
    }
  }

  return chars.join('');
}

function containsSubstring(string, substring) {
  return string.indexOf(substring) !== -1;
}

function countVowels(string) {
  const vowels = 'EeUuOoAaIiYy';
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
}

function isPalindrome(string) {
  const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, ''); //   /.../g - границы регулярного выражения
  // g - global поиск т.е. по всему массиву
  // [] -  перечисление
  //  знак ^ показывает НЕ

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) { return false; }
    left++;
    right--;
  }

  return true;
}

function findLongestWord(string) {
  const words = string.split(' ');
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

function reverseWords(string) {
  const words = string.split(' ');
  let result = [];

  for (let i = 0; i < words.length; ++i) {
    let reversedWord = '';
    for (let j = words[i].length - 1; j >= 0; --j) {
      reversedWord += words[i][j];
    }
    result.push(reversedWord);
  }

  return result.join(' ');
}

function getStringFromTemplate(firstName, surname) {
  return `Hello, ${firstName} ${surname}!`;
}

function extractNameFromTemplate(string) {
  return string.slice(7, -1);
}

function unbracketTag(string ) {
  return string.slice(1, -1);
}

function extractEmails(string) {
  return string.split(';');
}

function encodeToRot13(string) {
  const alphabet  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const mixed = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  return string.replace(/[a-zA-Z]/g, (char) => {
    const index = alphabet.indexOf(char);
    return mixed[index];
  }
  );
}

function getCardId(card) {
  const suits = ['♣', '♦', '♥', '♠'];
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const suit = card.slice(-1);
  const num = card.slice(0, -1);

  const suitIndex = suits.indexOf(suit);
  const rankIndex = numbers.indexOf(num);

  return suitIndex * 13 + rankIndex;
}
