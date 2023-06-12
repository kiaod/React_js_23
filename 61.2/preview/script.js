'use strict';

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstquvwxyz';
  let lettersFound = [];
  for (i = 0; i < string; i++) {
    let letter = string[i].toLowerCase();
    if (alphabet.includes(letter) && !lettersFound.includes(letter)) {
      lettersFound.push(letter);
    }
  }

  return lettersFound.length === 26;
}
