var Emitter = require('./emitter');

var emtr = new Emitter();

//greet is the property name on the object holding the events
emtr.on("greet", function() {
	console.log('Somewhere, someone said hello');	
});

emtr.on('greet', function () {
	console.log('A greeting occured');
});

console.log('Hello');
emtr.emit('greet');