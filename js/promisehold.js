let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('вы сделали выстрелил...');
    setTimeout(function() {
        Math.random() > 0.5 ? headshot({}) : fail("Вы промахнули");

    }, 3000)
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво')
}

function giveMoney() {
    console.log('вам заплатили денгами')
}


function loose() {
    console.log('Вы проиграли!')
}
shoot({},
    function(mark) {
        console.log('Вы попали в цел!');
        win(mark, buyBeer, giveMoney);
    },
    function(miss) {
        console.error(miss);
        loose();
    }

)