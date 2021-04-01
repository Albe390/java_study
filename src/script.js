function myModule() {
    this.hello = function() {
        return 'hello!';
    }
    this.goodbay = function() {
        return 'goodbay!';
    }
}
module.exports = myModule;