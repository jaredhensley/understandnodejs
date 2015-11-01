//video 51
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: (2 * 1024) });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

//stream fills buffer as it reads file
//if text file is > buffer size, we will get pieces at a time 
readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});