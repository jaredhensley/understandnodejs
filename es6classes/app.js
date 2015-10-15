'use strict'; //means that js engine will be pickier about things it lets you do.  avoids silly mistakes

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	//equiv to adding to prototype
	greet() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

/*
function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}
*/


var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);