function Greetr() {
	this.greeting = 'Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = new Greetr();
//remember, this module will be cached in the nodejs source
//meaning any new require call to the same module will 
//reference the same object when using a constructor
//NOT A NEW ONE!  references the same obj


//ex: var test = require('./greet4') === greet; 
//test and greet both reference the same object 
//even though they use require separately.  