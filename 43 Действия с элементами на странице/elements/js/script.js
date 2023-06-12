'use strict';
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// конец
// document.body.append(div);

// document.querySelector('.wrapper').append(div); без переменной
wrapper.append(div); // c переменной

// wrapper.prepend(div); начало

// wrapper.appendChild(div);

// hearts[0].after(div);
// hearts[0].before(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[1], hearts[1]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("afterbegin", <h2>Hello</h2>);