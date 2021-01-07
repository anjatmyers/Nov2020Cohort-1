let lastName = require('./anotherSample');

let Stack = require('./stack');

const superheroes = require('superheroes');

console.log(superheroes.random());

let stack1 = new Stack();
stack1.push(3)
stack1.push(30)
stack1.push(33)
stack1.push(31)
console.log(stack1.peek())

let stack2 = new Stack();
stack2.push(1)
stack2.push(12)
stack2.push(13)
stack2.push(11)
console.log(stack2.peek());

// let log = require('./log');

// log.info("this is a great day")
// log.warning('pollution is a bit high, be careful')
// log.error('what your doing, stop it!')

//module.exports = name;
