'user strict';
// let money, time, appData;
// money = +prompt("Ваш бюджет на месяц?", '');
// time = prompt("Введите дату в формате YYYY-MM-DD", '');
// alert(money + " На " + time);

// appData = { budget: money, timeData: time, expenses: {}, optionalExpenses: {}, income: [], saving: false };


// let exp1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
//     exp2 = +prompt("Во сколько обойдется ? ", " "),
//     exp3 = prompt("Введите обязательную статью расходов в этом месяце", " "),
//     exp4 = +prompt("Во сколько обойдется ? ", " ");

// appData.expenses.exp1 = exp2;
// appData.expenses.exp3 = exp4;

// alert(appData.budget / 30);

// let num = 50;
// if (num < 49) {
//     console.log('не верно')

// } else if (num > 100) {
//     console.log('Слычком многа')
// } else {
//     console.log('Верно')
// };
// (num == 50) ? console.log('verno'): console.log(' не Верно');

// switch (num) {
//     case num < 49:
//         console.log('не верно');
//         break;
//     case num > 100:
//         console.log('многа');
//         break;
//     case num > 80:
//         console.log('Все еще многа');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('что то пошло не так');
//         break;

// }

let num = 50;
// while (num < 60) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 60);

for (i = 1; i < 8; i++) {
    console.log(i);

}

for (i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
        // break;

    }
    console.log(i);

}