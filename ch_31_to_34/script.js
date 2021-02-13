var name = prompt("Enter Your Name", "Aqib Nawaz");
var dobDate = prompt("Type your DOB (Date)", "14");
var dobMonth = prompt("Type your DOB (Month)", "04");
var dobYear = prompt("Type your DOB (Year)", "1999");

var dateOfBirth =  dobMonth  + " " + dobDate +" "+ dobYear;

var dob = new Date(dateOfBirth);
var msDob = dob.getTime();

var today = new Date();
var msToday = today.getTime();

var diff = msToday - msDob;

var age = diff/(1000*60*60*24*30*12);
age = Math.floor(age);

var ageInDays = diff / (1000*60*60*24);
ageInDays = Math.floor(ageInDays);

// finding age in hours
var ageInHours = diff / (1000*60*60);
ageInHours = Math.floor(ageInHours);

//finding time Duration for Birthay 
var nextBDay = new Date("April 14,2021");

var gettingDiff= nextBDay.getTime() - today.getTime();
var durationInBDay = gettingDiff/(1000*60*60*24);

console.log("Hello " + name +", " + "Good Morning");
console.log("your dob is " + dob);
console.log("You are " + age + " Year Old");
console.log("Your age In Days is " + ageInDays);
console.log("Your age In Hours is " + ageInHours);
console.log("Your Birthay Duration Days " + Math.floor(durationInBDay));
