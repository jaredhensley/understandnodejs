
//points to the same object as module.exports
//we have mutated the object however
//we added a greet method that we can now
//call in app.js
exports.greet = function() {
	console.log('hello!!!!!');
	
}

console.log(exports);
console.log(module.exports);


//TL;DR JUST USE MODULE.EXPORTS!!
//YOU WILL SEE CODE THAT USES THE SHORTHAND
//I'M NOT GONNA DO IT THOUGH