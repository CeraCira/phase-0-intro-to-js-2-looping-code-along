// Code your solutions in this file
let message = [];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}

function countDown(num){
    while(num>=0){
        console.log(num);
        num--;
    }
}countDown(10)
