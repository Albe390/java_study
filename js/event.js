'user strict';
// let btn = document.getElementsByTagName('button'),
let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
// btn[0].onclick = function() {
//     alert('you pressed firnt button');
// }
// btn[0].onclick = function() {
//     alert('you again pressed firnt button');
// }

// btn[0].addEventListener('click', function() {
//     alert('you pressed firnt button'),
//     alert('you again pressed firnt button');
// };


// btn[0].addEventListener('click', function() {
//     alert('you pressed firnt button');

// });
// btn[0].addEventListener('click', function() {

//     alert('you again pressed firnt button');

// });

// btn[2].addEventListener('mouseenter', function() {
//     alert('you push in the tutton');

// });
// btn[0].addEventListener('click', function(event) {
// console.log(event);
// let target = event.target;
// target.style.display = 'none';
// console.log('an event occurred ' + event.type + ' in the element ' + event.target);
// });

// btn[0].addEventListener('click', function(event) {

//     console.log('an event occurred ' + event.type + ' in the element ' + event.target);
// });

// wrap.addEventListener('click', function() {
//     console.log('an event occurred ' + event.type + ' in the element ' + event.target);

// });
// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log('an event occurred ' + event.type + ' in the element ' + event.target);

// });

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('exited');
    });
});