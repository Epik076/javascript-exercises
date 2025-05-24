const reverseString = function(string) {
	let result = "";
	let char = '';
	for(let i = string.length; i >= 0; i--) {
		char = string.charAt(i);
		result += char;
	}
	return result;
};

// Do not edit below this line
module.exports = reverseString;
