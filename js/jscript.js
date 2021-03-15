'user strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    moneyPerDay: {},
    saving: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Бюджет еженевно составляет:' + appData.moneyPerDay + 'руб.');
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 500) {
            console.log('Низкий уровен доставка');
        } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2500) {
            console.log('Средный уровень доставка');
        } else if (appData.moneyPerDay > 2500) {
            console.log('хороший уровень доставки');
        } else {
            console.log('Произошла какая то ощибка');
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +prompt("Кокава сумма накопления?"),
                porcent = prompt('Под какой порцент?');
            appData.monthIncome = save / 100 / 12 * porcent;
            alert('доход с вашего депозита на месев:' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() { // Функция для определения необязательных расходов
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет допольнительный доход? (перечислите через запятую)', '');
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('может быть что - то еще', ''));
            appData.income.sort();
        }

        appData.income.forEach(function(itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }
};
// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }