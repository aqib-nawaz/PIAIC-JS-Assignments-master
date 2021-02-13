var inputValue = prompt("Enter a Value","cloUd naTive computinG");
// inputValue = inputValue.toLowerCase();
var firstChar1 = inputValue.slice(0,1).toUpperCase();
var otherChar1 = inputValue.slice(1,5).toLowerCase();
var firstChar2 = inputValue.slice(6,7).toUpperCase();
var otherChar2 = inputValue.slice(7,12).toLowerCase();
var firstChar3 = inputValue.slice(13,14).toUpperCase();
var otherChar3 = inputValue.slice(14).toLowerCase();
inputValue = firstChar1+otherChar1 +" "+ firstChar2+otherChar2 +" "+ firstChar3+otherChar3; 
console.log(inputValue)