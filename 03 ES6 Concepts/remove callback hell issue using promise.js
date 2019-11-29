function add(val) {
	return val+5;
}

function sub(val) {
	return val-2;
}

function mul(val) {
	return val*5;
}

var data = true;
var promise = new Promise(function(resolve,reject) {
	if (data)
		resolve(5)
	else
		reject('Data not processed')
})

promise.then(add).then(sub).then(mul).then((msg) => {
	console.log('Results are: '+msg)
}).catch((err) => {
	console.log(err)
})

