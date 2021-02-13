var maths = +prompt("Enter Maths Marks");
var physics = +prompt("Enter Physics Marks");
var islamyat = +prompt("Enter Islamyat Marks");
var english = +prompt("Enter English Marks");
var pakStudy = +prompt("Enter P.S Marks");
var totalMarks = +prompt("Enter Total Marks");
var obatinedMarks = maths + physics + islamyat + english + pakStudy;
var percentage = (obatinedMarks/totalMarks)*100;
alert("Obatined Marks = " + obatinedMarks  +"\n " + "Total Marks = " + totalMarks + "\n "+"Percentage = " + percentage);
