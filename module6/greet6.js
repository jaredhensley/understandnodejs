//very popular 

var greeting = 'hello world!!!!';

function greet() {
	console.log(greeting);
	
}

//revealing module pattern
//exposure only properties and methods you 
//want via a returned object 
module.exports = {
	// has access to greeting 
	// due to closure 
	// greeting is private outside of module
	greet: greet
}