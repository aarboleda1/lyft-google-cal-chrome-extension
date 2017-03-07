let log = console.log;
function showModal () {

}


// window.opennewtab
function lyftModal (button, eventModal) {
	let lyftModal = document.createElement('DIV');
	lyftModal.className += 'lyftModal';
	lyftModal.setAttribute('id', eventModal[0].id);
	lyftModal.style.display = 'none';
	lyftModal.style.position = 'fixed';
	lyftModal.style.paddingTop = '100px';
	lyftModal.style.zIndex = '1';
	lyftModal.style.top = '0';
	lyftModal.style.left = '0';
	lyftModal.style.width = '100%';
	lyftModal.style.height = '100%';
	lyftModal.style.backgroundColor = 'rgb(0,0,0)';
	lyftModal.style.backgroundColor = 'rgba(0,0,0,0.4)';
  
	var span = document.createAttribute('SPAN');

	var modalContent = document.createElement('DIV');
	lyftModal.className += 'modal-content';
	modalContent.style.backgroundColor = '#fefefe';
	modalContent.style.margin = 'auto';
	modalContent.style.padding = '20px';
	modalContent.style.border = '1px solid #888';
	modalContent.style.border = '80%';
	lyftModal.appendChild(modalContent);
	log(lyftModal, modalContent, 'IS THE STUFF');
	setTimeout(showModal, 1000)	
}

function insertLyftButton (eventModal) {
	var button = document.createElement('BUTTON');
	var buttonText = document.createTextNode('Schedule Ride');
	button.addEventListener('click', function () {
		// lyftModal(this, eventModal);
		// var lyft = 'https://www.lyft.com';
		// window.open(lyft,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;

		
		console.log(window.token, 'TOEKKNENNAFEIAOJFOAIJEO');
		$.ajax({
        url: 'https://api.lyft.com/v1/rides',
				beforeSend: function(xhr) { 
    			xhr.setRequestHeader('Authorization','Bearer ' + window.token)
    		}, 
				data: '{"ride_type" : "lyft", "origin" : {"lat" : 37.7763, "lng" : -122.3918 } }', 
				type: 'POST',
				contentType: 'application/json',
		})
		.done(function (res) {
			console.log(res);
		});

		// curl -X POST -H "Authorization: Bearer <access_token> " \
    //  -H "Content-Type: application/json" \
    //  -d '{"ride_type" : "lyft", "origin" : {"lat" : 37.7763, "lng" : -122.3918 } }' \
    //  'https://api.lyft.com/v1/rides'
		
	})
	button.appendChild(buttonText);	
	eventModal[0].appendChild(button);	
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
			},1000)
		})
	};	
}

function getLyftScreen () {
	//make request to lyft API

	//display in modal

};

function scheduler () {

};
window.onload = load;