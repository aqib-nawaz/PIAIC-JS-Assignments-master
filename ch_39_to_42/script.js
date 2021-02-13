var Course1 = parseInt(prompt("Enter Course 1 Marks"));
var Course2 = parseInt(prompt("Enter Course 2 Marks"));
var Course3 = parseInt(prompt("Enter Course 3 Marks"));
var Course4 = parseInt(prompt("Enter Course 4 Marks"));
var Course5 = parseInt(prompt("Enter Course 5 Marks"));

var obtainedMarks= Course1 + Course2 + Course3 + Course4 + Course5;
console.log("Obtained Marks is: " + obtainedMarks )

var totalMarks = parseInt(prompt("Enter Total Marks","500"));
console.log("Total Marks: "+ totalMarks )

var percentage = (obtainedMarks/totalMarks)*100;
console.log("Percentage is: " + percentage);

switch(true){
	case percentage >=90 && percentage <=100:
	alert("Your Grade is A+" )
	break;
	case percentage >=75 && percentage <=89:
	alert("Your Grade is A" )
	break;
	case percentage >=64 && percentage <=74:
	alert("Your Grade is B" )
	break;
	case percentage >=45 && percentage <=59:
	alert("Your Grade is C" )
	break;
	case percentage >=30 && percentage <=45:
	alert("Your Grade is D" )
	break;
	case percentage >=0 && percentage  <=29:
	alert("Your Grade is E" )
	break;
	default:
	alert("Please Enter Marks")
}

