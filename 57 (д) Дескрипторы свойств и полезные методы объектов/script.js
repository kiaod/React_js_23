'use strict';
const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/1993',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }

}

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'birthday', {writable: false});
// user.name = 'afdsgf';

Object.defineProperty(user, 'gender', {value: 'birthday'});

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
// writable 
// enumerable
// configurable 