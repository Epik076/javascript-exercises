const palindromes = function (string) {
	string = string.replace(/[^\p{L}\p{N}]/gu, '');
	string = string.toLowerCase();
	let strArr = string.split('');
	let reverseArray = [];
	let strLength = string.length - 1;
	for(let i = 0; i < strArr.length; i++) 
	{
		reverseArray[i] = strArr[strLength];
		strLength--;
	}
	for(let i = 0; i < strArr.length; i++) 
	{
		if(reverseArray[i] !== strArr[i]) 
		{
			return false;
		}
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
