exports = function() {
	console.log('hello');
}


//initially, exports and module.exports
//point to the same object, BUT, we have
//set exports = to a new object (a function)
//and now they do not reference the same object
//also, our module will return module.exports
//so exports will not be returned since it 
//points to a different spot in memory 
//DONT OVERRIDE EXPORTS, you can mutate it
//by adding properties or methods :)


console.log(exports);
console.log(module.exports);