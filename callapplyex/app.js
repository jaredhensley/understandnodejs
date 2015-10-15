var obj = {
	name: 'john doe',
	greet: function() {
		console.log(`hello ${ this.name }`);
	}
}

obj.greet();
//whatever is passe to call, points to what `this` points to
obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'Jane Doe' });

//only different between call and apply is how parameters are used.
//apply uses an array of params.  
//call just separates params by , after the this reference.  

//GREAT WAY to borrow methods from a functin but point to THIS object you are interested in.  