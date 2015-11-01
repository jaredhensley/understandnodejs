var fs = require('fs'); //deals with file system that allows c++ code to deal with files

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
	console.log(greet);

//error first callback
//js running through v8 and node is grabbing contents of file
//thus, async
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);	
});

console.log('Done!');  // v8 still running as node readsFile