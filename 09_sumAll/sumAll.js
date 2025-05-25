const sumAll = function(startInt, endInt) {
	let total = 0;
	let cache = 0;
	if( startInt < 0 || endInt < 0 || (startInt % 1 !== 0) || (endInt % 1 !== 0) || Number(startInt) !== startInt || Number(endInt) !== endInt ) 
	{
	return 'ERROR';
	}
	if(startInt > endInt) 
	{
	cache = startInt;
	startInt = endInt;
	endInt = cache;
	}
	for(let i = startInt; i <= endInt; i++) {
		total += i;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
