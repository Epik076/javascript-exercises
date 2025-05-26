const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) 
	{
		sum += arr[i];
	}
	return sum;
};

const multiply = function(arr) {
	let product = 1;
	for(let i = 0; i < arr.length; i++) 
	{
		product *= arr[i];
	}
	return product;
};

const power = function(base,exponent) {
	let result = base;
	for(let i = 1; i < exponent; i++) 
	{
		result *= base;
	}
	return result;
};

const factorial = function(num) {
	if( num === 0 || num === 1) 
	{
		return 1;
	}
	let i = num - 1;
	while(i > 0) 
	{
		num *= i;
		i--;
	}
	return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
