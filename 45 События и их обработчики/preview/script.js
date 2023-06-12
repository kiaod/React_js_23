const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onklick = function() {
//  alert("click");
// };

let i = 0;
const deleteElement = (e) => {
 console.log(e.currentTarget);
 console.log(e.type);

 // i++;
 // if (i == 1) {
 //  btn.removeEventListener('click', deleteElement);
 // }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btn.forEach(btn => {
 btn.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function(e) {
 e.preventDefault();

 console.log(e.target);
});