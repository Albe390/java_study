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