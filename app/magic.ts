const message = 'hello';

function saySomething(message: string) {
    console.log(message);
}

//saySomething(45);
saySomething('hi');

class Greeter {
    saySomething(message: string = 'cucu'){
        return message + ' there!'
    }
}

const greeter = new Greeter();
greeter.saySomething('hello');