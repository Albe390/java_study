// setTimeout(func, delay);
// setTimeout(sayHi, 5000);
// let timerId = setTimeout(sayHi, 5000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHi, 5000);

// // clearTimeout(timerId);

// function sayHi() {
//     alert('hellow word!!!');
// }

// let timerID = setTimeout(function log() {
//     console.log('hellow Word!!');
//     alert('hellow Word!!');

//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn');
elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0,

        id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);

        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.botoness'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
    if (event.target && event.target.matches('button.first')) {
        console.log('hellow!!');
    }
});