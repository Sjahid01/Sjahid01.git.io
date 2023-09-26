let date  = new Date ();
let day = date.getDay();
if (day ==0) {
    day = "zondag";
}
else if (day == 1) {
    day = "maandag";    
} 
else if (day == 2) {
    day = "dinsdag";        
}
else if (day == 3) {
    day = "woensdag";
} 
else if (day == 4) {
    day = "donderdag";
} 
else if (day == 5) {
    day = "vrijdag";
}
else if (day == 6) {
    day = "zaterdag";
}

let divday = document = document.getElementById('divweekday');
divday.innerHTML="Het is vandaag " + day;

let button = document.getElementById('button');


button.addEventListener('click', function() {
let name = document.getElementById('inputname').value;
let classname = document.getElementById('inputclass').value;

let divname = document.getElementById('divname')
let divclass = document.getElementById('divclass')

divname.innerHTML ="naam: " + name
    divclass.innerHTML="klass:" +classname

});


// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();
