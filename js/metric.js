let box = document.querySelector('.box'),
    btn = document.querySelector('.btn');

// let width = box.clientWidth,
// let height = box.clientHeight;

// let width = box.offsetWidth,
//     height = box.offsetHeight;

// let width = box.scrollWidth,
//     height = box.scrollHeight;

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().right);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener('click', function() {
    // box.style.height = box.scrollHeight + 'px';
    // box.scrollHeight = 1500;
    // console.log(height);
    // console.log(box.scrollTop);
    box.scrollTop = 0;
    document.documentElement.scrollTop = 0


});
// scrollTo(x,y)
scrollBy(0, 300);
scrollTo(0, 300);