var EventEmitter = require('events');

//gives us access to some methods such as inherits with allows us to use inheritence in a simple way
var util = require('util');

function Greetr() {
	EventEmitter.call(this);  //CRUCIAL PATTERN, vid 39 understanding node js
	this.greeting = 'Hello world!';
}

//objects created from Greetr, inherit prototype of EventEmitter too
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data );
	this.emit('greet', data);
}

var greeter1 = new Greetr();
greeter1.on('greet', function(data) {
	console.log('someone greeted! :' + data );
	
});

greeter1.greet('Tony');