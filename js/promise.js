let drink = 1;

function shoot(arrow) {
    console.log('вы сделали выстрелил...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.5 ? resolve({}) : reject("Вы промахнули");

        }, 3000);
    })
    return promise;
};

function win() {
    console.log('Вы победили!');
    (drink == 0) ? buyBeer(): giveMoney();
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
shoot({})
    .then(mark => console.log('Вы попали в цел!'))
    .then(win)
    .catch(loose)