'use strict';

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
}



// if (num < 49) {
//     console.log('error');
// } else if (num >100) {
//     console.log('bigger');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 51:
        console.log('yes');
        break;    
    default:
        console.log('all error');
        break;    
}