var body = document.querySelector('body');
body.onclick = function () {
	var events = document.getElementsByClassName("evt-lk");
	getEventList(events);
};

function getEventList (events) {
	var eventList = [];	
	for (var event in events) {
		console.log(events[event].innerHTML);
		var listNode = document.createElement('LI');
		// var text = eventList.push(events[event].innerHTML);			
		// var textNode = document.createTextNode(text);
		// document.getElementById("event-list").appendChild(listNode);
		// console.log(textNode);
	}
	return eventList;
}

document.getElementById('getEvents').onclick = function (e) {
	console.log('hello world');
	var events = document.getElementsByClassName("evt-lk");
	var eList = getEventList(events);
	console.log(eList);
	document.body.innerHTML +=
		'<ul><li>Hello world </li></ul>'
	console.log('helo world');
}



// var events = document.getElementsByClassName("evt-lk");

// for(var i = 0; i < events.length; i++) {
// 	var event = events[i];
// 	event.onclick = function(e) {
// 		console.log("event", e);
// 	}
// }