let number = 1;


(function() {

    let number = 2;

    console.log(number);

    return console.log(number + 3);
}())

console.log(number);

// 2 

let user = (function() {
    let private = function() {
        console.log('I am private')
    }
    return {
        sayHi: function() {
            console.log('Helo!')
        }

    }
}())

console.log(user);
console.log(user.sayHi());

// 3

let users = (function() {
    let private = function() {
        console.log('I am private')
    }

    let sayHi = function() {
        console.log('Helo!')
    }
    return {
        sayHi: sayHi
    }
}());

console.log(users);
console.log(users.sayHi());