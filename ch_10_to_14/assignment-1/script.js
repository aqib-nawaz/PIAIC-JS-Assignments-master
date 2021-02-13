var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var operator = prompt("Enter any operator + , - , * , or  /");
var result;
if (operator == "+"){
	 result = num1 + num2;
	 alert(num1 +" "+ operator +" " + num2+ " = " + result);
}
else if (operator == "-"){
	result = num1 - num2;
	alert(num1 +" "+ operator +" " + num2+ " = " + result);
}
else if (operator =="*"){
	 result = num1 * num2;
	 alert(num1 +" "+ operator +" " + num2+ " = " + result);
}
else if (operator == "/"){
	result = num1 / num2;
	alert(num1 +" "+ operator +" " + num2+ " = " + result);
}
else {
	alert("Error")
}