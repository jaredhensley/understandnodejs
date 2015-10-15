//don't need ./ because we aren't looking 
//in the folder we are in
//native modules are built in to the node api

var util = require('util');

var name = 'Jared';
var greeting = util.format('Hello, %s', name);
util.log(greeting);