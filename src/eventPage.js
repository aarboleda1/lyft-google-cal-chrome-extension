var body = document.querySelector('body');
body.onclick = function () {
	var events = document.getElementsByClassName("evt-lk");
	getEventList(events);
};

function getEventList (events) {
	var eventList = [];	
	for (var event in events) {
		eventList.push(events[event].innerHTML);			
	}
	console.log(eventList);
}

document.getElementById('getEvents').onclick = function (e) {
	console.log(events);
	document.body.innerHTML +='<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>';
	console.log('helo world');
}



// var events = document.getElementsByClassName("evt-lk");

// for(var i = 0; i < events.length; i++) {
// 	var event = events[i];
// 	event.onclick = function(e) {
// 		console.log("event", e);
// 	}
// }