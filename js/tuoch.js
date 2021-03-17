// TouchStart
// touchMove
// touchEnd
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('red box : touch start');

    //     // console.log(e.touches);
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);

    // });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        // console.log('red box : touch move');
        console.log('red box :' + e.touches[0].pageX);
    });
    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('red box : touch end');
    // });

    // new RegExp('pattern', 'flags') 
    //     /pattern/flags

    // let ans = prompt('input your name:');

    // let reg = /p/;

    // console.log(ans.search(reg));

    //i -flag registra
    //g - flag globalnost
    //m - flag monostroche- multistring

    //\d - cifri  \D - не цифры
    //\w - budbi  \W - не букбы
    //\s - space  \S - не пробел


    // let ans = prompt('input your name:');

    // let reg = /p/gi;

    // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    // let pass = prompt('input your passwor:');

    // console.log(pass.replace(/./g, '*'));
    // alert('112-255-10'.replace(/-/g, ':'));

    // let ans = prompt('input your name:');

    // let reg = /p/gi;

    // console.log(ans.match(reg));

    // let str = 'my name is R2D2';
    // console.log(str.match(/\w\d\w\d/i));

    let str = 'my name is/ $R2D2';
    console.log(str.match(/\$/i));
});