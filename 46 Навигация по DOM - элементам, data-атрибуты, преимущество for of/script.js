// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('[data-current="3"]').nextSibling); //следующий сосед node
console.log(document.querySelector('[data-current="3"]').previousSibling); //предыдущий сосед node
console.log(document.querySelector('[data-current="3"]').nextElementSibling); //следующий сосед елемент
console.log(document.querySelector('[data-current="3"]').previousElementSibling); //предыдущий сосед елемент
console.log(document.querySelector('#current').parentElement); // поиск элемента по родителю

console.log(document.body.firstElementChild);

console.log(document.body.lastElementChild);

for (let node of document.body.chileNodes) {

  console.log(node);
}