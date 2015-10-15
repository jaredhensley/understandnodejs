function Greetr() {
	this.greeting = 'Hello world!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = Greetr;
//tricky tricky, not calling new Greetr quite yet! 