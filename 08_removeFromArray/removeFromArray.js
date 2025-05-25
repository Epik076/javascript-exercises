/*
// Old school way using the arguments object

const removeFromArray = function() {
	const arr = arguments[0];
	const valuesToRemove = Array.from(arguments).slice(1);
	const newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(!valuesToRemove.includes(arr[i])) {
			newArr.push(arr[i]);	
		}
	}
	return newArr;
};
*/

// Modern way of using Rest parameters ...

const removeFromArray = function(arr, ...args) {
	const newArr = [];

	for(let i = 0; i < arr.length; i++) {
		if(!args.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
