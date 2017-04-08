//Fizz Buzz function expression
function fizzBuzz(value){
	if(typeof(value) !== "number"){
		return "Value not an integer";
	}else if(value % 3 === 0 && value % 5 === 0){
		return "FizzBuzz";
	}else if(value % 3 === 0){
		return "Fizz"
	}else if(value % 5 === 0){
		return "Buzz";
	}else{
		return value;
	}
}