var inputValue = prompt("Enter a Value","cloUd naTive computinG")

function capInputValue(str) {
	
	str = str.toLowerCase().split(" ");
	for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}

	return str.join(" ");
}
console.log(capInputValue(inputValue)); 


