var message = 'hello';
function saySomething(message) {
    console.log(message);
}
//saySomething(45);
saySomething('hi');
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'cucu'; }
        return message + ' there!';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
//# sourceMappingURL=magic.js.map