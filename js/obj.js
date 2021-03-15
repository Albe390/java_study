let options = {
    width: 1024,
    heigth: 1024,
    name: 'test'
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool;
console.log(options);

for (let key in options) {
    console.log(' Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let arr = ["First", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ':' + item + "( massiv: " + mass + ')');
// });

// console.log(arr);
// let mass = [1, 2, 4, 6, 8];
// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt('', '');
// arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = ['asw', 'sdrr', 'sorr', 'katis', 'valores'],
//     i = arr.join(', ');
// console.log(arr);
// console.log(i);
// let arr = ['asw', 'sdrr', 'sorr', 'batis', 'martines', 'valores'],
//     i = arr.sort();
// console.log(arr);

// let arr = [1, 35, 188, 25, 13, 55],
//     i = arr.sort();
// console.log(arr);


let arr = [1, 35, 188, 25, 13, 55],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return (a - b);
}
console.log(arr);

// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }


// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

let soldier = {
    health: 400,
    armer: 100
};

let jhon = {
    health: 200

};

jhon.__proto__ = soldier;

console.log(jhon);
console.log(jhon.armer);