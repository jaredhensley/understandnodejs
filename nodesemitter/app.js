var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

//greet is the property name on the object holding the events
emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello');	
});

emtr.on(eventConfig.GREET, function () {
	console.log('A greeting occured');
});

console.log('Hello');
emtr.emit('greet');