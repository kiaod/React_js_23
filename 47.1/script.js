

function factorial(n) {
  if (typeof(n) !=='number' || !Number.isInteger(n)) {
    return 'Введите целое цисло!';
  } else if (n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(5));