// Место для первой задачи

function calculateVolumeAndArea(length) {
  if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

let volume = 0,
    area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

// Место для второй задачи
function getCoupeNumber(seatNumber) {
 if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
    return "Ошибка. Проверьте правильность введенного номера места";
 } if (seatNumber === 0 || seatNumber > 36) {
    return "Таких мест в вагоне не существует";
 }    
 return Math.ceil(seatNumber / 4);
}

function getTimeFromMinutes(minutesTotal) {
  if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
      return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = '';

  switch (hours) {
      case 0: 
          hoursStr = 'часов';
          break;
      case 1:
          hoursStr = 'час';
          break;
      case 2:
      case 3:
      case 4:
          hoursStr = 'часа';
          break;
      default:
          hoursStr = 'часов';
  }

  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

function findMaxNumber(a, b ,c, d) {
  // Самое простое - это использовать Math.max :)
  // А оптимизировать такую проверку мы научимся совсем скоро
  if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number') {
      return 0;
  } else {
      return Math.max(a, b ,c, d);
  }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');