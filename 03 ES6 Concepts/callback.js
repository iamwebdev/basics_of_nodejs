function calculate(x) {
	return x+10;
}

function display(callback) {
	return calculate(5);
}

console.log(display(calculate))

