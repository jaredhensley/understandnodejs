'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
	constructor() {
		super(); //same thing as setting this in .call below
		this.greeting = 'hello world';
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`); 
		this.emit('greet', data);
	}
	
}

