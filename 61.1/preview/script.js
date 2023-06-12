'use strict';

function amountOfPages(summary){
  let result = '';
  let n = 0;
  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      n = i;
      break;
    }
  }
  return n;
}
console.log(amountOfPages(25));
// const numbersString = amountOfPages(17);
// // const numbersStringLength = numbersString.length;
// console.log(numbersString);
// console.log(numbersString.length);
// .length