class User {
    constructor(name, id) {
        this.id = id;
        this.name = name;
        this.human = true;
    }
    hello() {
        console.log(`hello!  ${this.name}`)
    }
    exit(name) {
        console.log(`Ползователь  ${this.name} Ушел...`)
    }

}
let ivan = new User('Ivan', 30);
let alex = new User('Alex', 25);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();