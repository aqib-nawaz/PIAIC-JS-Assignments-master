
//Customized version of previous assignment "ch_15_16_17" by using for loop...


//----------------------------------Method 1------------------------------------------------


var courses = [];
var course;
for (var i = 1; i <= 5; i++) {
		course = prompt("Enter Course " + i);
		courses.push(course);
		alert("My TODO courses List = " +courses);
	}

	

for (var i = 0; i < courses.length; i++) {
	 courses[i]= prompt("Edit course", courses[i]);
     
}
alert("My TODO courses edited List = " + courses);




//-----------------------------------------------------------------------------------

//-----------------------------------Method 2----------------------------------------
// var courses = [];
// var inputCourse= [];
// for (var i = 0; i < 5; i++) {
// 	inputCourse[i] = prompt("Enter course " + i + ": ");
// 	courses.push(inputCourse[i]);

// }
// alert(courses);

// courses.splice(0, 5);
// for (var i = 0; i < 5; i++) {
// 	inputCourse[i] = prompt("Edit course " + i + ":", courses[i]);
// 	courses.push(inputCourse[i]);
// }
// alert(courses);