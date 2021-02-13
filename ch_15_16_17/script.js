var courses = [];
var course1 = prompt("Enter Course1");
var course2 = prompt("Enter Course2");	
var course3 = prompt("Enter Course3");	
var course4 = prompt("Enter Course4");	
var course5 = prompt("Enter Course5");
courses.push(course1 , course2 , course3 , course4 , course5);
alert("My TODO courses list = " + courses);

course1=prompt("Edit course 1", courses[0]);
course2=prompt("Edit course 2", courses[1]);
course3=prompt("Edit course 3", courses[2]);
course4=prompt("Edit course 4", courses[3]);
course5=prompt("Edit course 5", courses[4]);

courses.splice(0, 5, course1 , course2 , course3 , course4 , course5);
alert("My TODO courses  edited list = " + courses);
