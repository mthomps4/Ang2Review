class Greeter {
  saySomething(message:string = "What's UP!") {
    return message + " something";
  }
}

var greeter = new Greeter();
greeter.saySomething("hello");
