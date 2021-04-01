let app = {
    data: 45
};
console.log(app);

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя ползователь : ${this.name}, Возраст: ${userAge}`)

//     }
//     this.getAge = function() {
//         return userAge;
//     }
//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Не допустимое значение')
//         }
//     }

// }

let ivan = new User('ivan', 30);
console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.setAge(30);
console.log(ivan.getAge());

ivan.say();