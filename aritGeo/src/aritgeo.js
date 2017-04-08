function aritGeo(myArray) {
	if(!Array.isArray(myArray)){

		return "Please input an array";
	}else{
		let indexDiff = myArray[1] - myArray[0];
		let indexRatio = myArray[1] / myArray[0];

		let arithmetic = true;
		let geometric = true;

		if (myArray.length > 0) {
			for(let i = 0; i < myArray.length - 1; i++) {
				if (myArray[i + 1] - myArray[i] !== indexDiff)
					arithmetic = false; 
				if (myArray[i + 1] / indexRatio !== myArray[i])
					geometric = false;
			}
			if (arithmetic === true) return "Arithmetic";
			else if (geometric === true) return "Geometric";
			else return -1;
		} else {
			return 0;
		}

		
	}
}
