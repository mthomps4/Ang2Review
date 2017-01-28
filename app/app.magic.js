var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = "What's UP!"; }
        return message + " something";
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething("hello");
//# sourceMappingURL=app.magic.js.map