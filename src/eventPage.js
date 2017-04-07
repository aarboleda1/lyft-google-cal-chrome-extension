function requestRide(origin, destination) {
	// $.ajax({
	//     url: 'https://api.lyft.com/v1/rides',
	// 		beforeSend: function(xhr) { 
	// 			xhr.setRequestHeader('Authorization','Bearer ' + 'gAAAAABYteP_LNYsphMTECGHw7p1s3zJKTeOTNIDn7-RGhhmTIyeyoT5pkanBkBVffuGkS-d6SSwi87Kabf2hoxyirfrcqvg3W0PERITkspqAUZ_PBzTUnjQ1E6sbfgWm4_a5xqgo0ZZV5h20Dy0VW7hvdriL8RMSuZqi7xyk-tndFCyWrcGmbs= ');
	// 			xhr.setRequestHeader('Content-Type', 'application/json');
	// 		}, 
	// 		data: {ride_type : "lyft", 
	// 			origin : {lat : origin.lat, lng : origin.lng },  // dynamically use origin.lat && origin.lng
	// 			destination: {lat: destination.lat, lng: destination.lng} // dynamically use destination.lat destination.lng
	// 		}, 
	// 		type: 'POST',
	// 		// contentType: 'application/json',
	// })
	// .done(function (res) {
	// });
}

function authorizeApplication() {
	var url = 'https://api.lyft.com/oauth/authorize?client_id=kK1f4CSvQe4r&scope=public%20profile%20rides.read%20rides.request%20offline&state=<state_string>&response_type=code';
	$.ajax({
		url: url
	})
	.done((res) => {
		console.log(res); // figure out what to do for login 
	})
}

/*
Add event listener to button to authenticate user into app
*/
function insertLyftButton (eventModal) {
	var button = document.createElement('button');
	var buttonText = document.createTextNode('Schedule Ride');
	var input = document.createElement("input");
	button.appendChild(buttonText);	
	button.addEventListener('click', requestRide);
	// eventModal[0].appendChild(button);
	eventModal[0].appendChild(input);
	// eventModal[0].appendChild('<input type="text" placeholder="type">');	
	authorizeApplication();
} 

// get all events on on the page and add id's on them so when we click
function load () {
	let events = document.getElementsByClassName("cbrd");
	let event;
	var context = this;
	$.ajax({
			url: 'https://api.lyft.com/oauth/token',
			beforeSend: function(xhr) { 
				xhr.setRequestHeader("Authorization", "Basic " + btoa("kK1f4CSvQe4r:IAPC8V3BrigGh3nAmXNNu5xuzQ2Ptzfy")); 
			}, 
			data: '{"grant_type": "client_credentials", "scope": "public"}',
			type: 'POST',
			contentType: 'application/json',
	})
	.done(function (res) {
		window.token = res.access_token;
		console.log('installed')
		console.log(context.token);
	});
	
	for (let i = 0; i < events.length ; i++) {
		event = events[i];
		event.setAttribute('id', i);
		event.addEventListener('click', function () {
			var modal = document.getElementsByClassName('neb-footer');
			//async pass the modal to insertLyftButton
			setTimeout(() => {
				insertLyftButton(modal);
			},0)
		})
	};	
}




window.onload = load;

