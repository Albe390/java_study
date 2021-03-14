let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage('hellow word');
console.log(num);

// function calc(a, b) {
//     return (a * b);
// }
// console.log(calc(3, 5));
// console.log(calc(5, 7));

// let calc = function(a, b) {
//     return (a * b);
// }
let calc = (a, b) => a + b;
console.log(calc(3, 5));
console.log(calc(5, 7));

// a = console.log(calc(3, 5));
// b = console.log(calc(5, 7));
// c = a + b;
// console.log(c);

function retVar() {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

let str = "testo En todo";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//let twelve = 12.12;
let twelve = "12.12px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));