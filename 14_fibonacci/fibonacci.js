const fibonacci = function(num) {
	Number(num);
	if(num < 0){
	return "OOPS";
	}
	let x = 0;
	let y = 1;
	for(let i = 0; i < num; i++) {
		let z = x + y;
		x = y;
		y = z;
	}
	return x;
};

// Do not edit below this line
module.exports = fibonacci;
