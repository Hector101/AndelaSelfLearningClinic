function getPrimes(n){
	//check if the argument passed is a number
	if(isNaN(n)) {
		return "invalid argument";
	} else if(n < 2) { 
		//if number is less than two return empty array
		return [];
	} else {
		//if number starts from (2) return at least an array containing 2
		var primes = [2], isNotPrime;

	  	for (var i = 3; i < n; i++) {
	  		/*
	  			Array.prototype.some() tests whether
	  			some element in the array has a divisor using `checkDivisor` function
	  		*/
	    	isNotPrime = primes.some(checkDivisor);
	    	if ( !isNotPrime ) {
	      		primes.push(i);
	    	}
	  	}
	  	//check if a divisor exists for each number
	  	function checkDivisor (j) {
	    	return i % j === 0;
	  	}
	  	return primes;
}
}

getPrimes(1);