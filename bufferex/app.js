//buffer is intended to be a finite size. 
//asking buffer to covert to binary data from string 
var buf = new Buffer('Hello', 'utf8');  //utf8 is actually default, not necessary
console.log(buf); //outputs in hexadecimal 
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());