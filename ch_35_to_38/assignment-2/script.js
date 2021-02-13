var inputValue = prompt("Enter a Value");

function factorial(num){

	if (num ==1) {

		return 1
	}
	else {

		return num*factorial(num-1);
	}

}

console.log("Factorial of " + inputValue + " is " +factorial(inputValue));