var data = true;
var promise = new Promise(function(resolve, reject) {
	if(data)
		resolve('Data recieved')
	else
		reject('Data not recieved')
});

// Two way to use Promise
// First Way

promise.then(function(msg) {
	console.log(msg);
}, function(err) {
	console.log(err);
});

// Second Way (Simplified)

promise.then((msg) => {
	console.log(msg)
}).catch((err) => {
	console.log(err)
})