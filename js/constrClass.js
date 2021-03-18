function User(name, id) {
    this.id = id;
    this.name = name;

    this.human = true;
    this.hello = function() {
        console.log('hello!' + this.name);
    };
    User.prototype.exit = function(name) {
        console.log('Ползователь ' + this.name + ' Ушел,,');
    }

}
let ivan = new User('ivan', 30),
    alex = new User('alex', 25);

console.log(ivan);
console.log(alex);

ivan.exit();
alex.exit();