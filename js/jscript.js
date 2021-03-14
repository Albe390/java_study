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

// let num = 50;
// while (num < 60) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 60);

// for (i = 1; i < 8; i++) {
//     console.log(i);

// }

// for (i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//         // break;

//     }
//     console.log(i);

// }

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

// money = +prompt("Ваш бюджет на месяц?", '');
// time = prompt("Введите дату в формате YYYY-MM-DD", '');
// alert(money + " На " + time);
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    moneyPerDay: {},
    saving: true
};


// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }

//     i++;
// }

// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }

//     i++;
// }
// while (i < 2);


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let exp1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
            exp2 = +prompt("Во сколько обойдется ? ", " ");

        if ((typeof(exp1)) === 'string' && (typeof(exp1)) != null && (typeof(exp2)) != null &&
            exp1 != '' && exp2 != '' && exp1.length < 50) {
            console.log('done');
            appData.expenses[exp1] = exp2;
        } else {
            console.log('Плохой ресультать');
            i = i - 1;

        }

    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет еженевно составляет:' + appData.moneyPerDay + 'руб.');
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 500) {
        console.log('Низкий уровен доставка');
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2500) {
        console.log('Средный уровень доставка');

    } else if (appData.moneyPerDay > 2500) {
        console.log('хороший уровень доставки');

    } else {
        console.log('Произошла какая то ощибка');
    }

}
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Кокава сумма накопления?"),
            porcent = prompt('Под какой порцент?');
        appData.monthIncome = save / 100 / 12 * porcent;
        alert('доход с вашего депозита на месев:' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() { // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }

}
chooseOptExpenses();