function getPrimes(n){
	if(typeof(n) === "string"){
		return "Invalid input value";
	}
	if(n < 0){
		return "Negative value is invalid";
	}
	if(n === 0){
		return [];
	}
	var result = [];
	for(let i = 0; i <= n; i++){
		if(n % i === 0 && n !== i){
			result.push(i);
       }

	}
	return result;
}