function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        // return a.this + b.this;
        return a + b;
    }
    console.log(sum());
}
showThis(4, 6);
showThis(6, 6);



// 1.  Просто вызов функции  -  windows/undefine
// 2. metod Обекта -  this = object
// 3. metod oject new Новый конструктор -= снов созданный обьекты
let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);

        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();

let user = {
    name: 'jhon'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
console.log(sayName.call(user, ' Smith'));
console.log(sayName.apply(user, [' Snow']));

function count(number) {
    return this * number;

}
let double = count.bind(3);
console.log(double(5));
console.log(double(10));
// Указание конкретного контеста - call appy bind;

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';

    function showThis() {
        console.log(this);
    }
    showThis();
});