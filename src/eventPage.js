var body = document.getElementsByClassName('body');

body.onclick = function () {
	var events = document.getElementsByClassName("cbrd");
	addRideScheduleButton(events);
};
function addRideScheduleButton (events) {
	var eventModal = document.getElementsByClassName('neb-footer');
	var button = document.createElement('BUTTON');
	var buttonText = document.createTextNode('Schedule Ride');
	button.appendChild(buttonText);	
	eventModal[0].appendChild(button);	
	// create modal with ride schedulign with Lyftt/Uber

};

function scheduleRide () {
	//make call to API

	//Display data on the screen

};

function confirmRide () {

};