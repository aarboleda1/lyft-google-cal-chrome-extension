var body = document.querySelector('body');
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
}

function getLyftScreen () {
	//make request to lyft API

	//display in modal

};

function scheduler () {

};