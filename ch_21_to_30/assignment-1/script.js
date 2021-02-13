var num = prompt("Enter a Number", "3.4");
num = Number(Math.ceil(num));

var text = "This is dummy Text";
var sliceText = text.slice(0,num);
var revString= "";
for(i = sliceText.length-1; i >=0; i--){
	revString= revString + sliceText[i];
} 
alert(revString);
