	chrome.extension.onMessage.addListener( function(request, sender, sendResponse) {
			
			//oauth.clearTokens();
			
			var oauth = ChromeExOAuth.initBackgroundPage({
			  'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
			  'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
			  'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
			  'consumer_key': 'anonymous',
			  'consumer_secret': 'anonymous',
			  'scope': 'http://www.google.com/calendar/feeds/',
			  'app_name': 'Add lyft rides to google calendar events'
			});
			
			oauth.authorize(function() {});
			
			function callback(resp, xhr) {
				if (resp.indexOf("event.confirmed") != -1)
					alert("Your event was successfully added!");
				else if (resp.length == 0)
					alert("Sorry, an error occurred while adding your event. We are working on it.");
				else
					alert("Sorry, an error occurred while adding your event. If the following error mentions authorization, try refreshing the page and adding your event again: " + resp);
			};
			
	 	if (request.actionType == "popOverCleared") { //Then add the event
			var url = 'http://www.google.com/calendar/feeds/default/private/full';
			//var test = oauth.getAuthorizationHeader(url, 'POST', {'alt': 'json'});
			var theRequest = {
				    'method': 'POST',
				    'headers': {
				      'GData-Version': '2.0',
				      'Content-Type': 'application/atom+xml'
				    },
				    'parameters': {
				      'alt': 'json'
				    },
				    'body': "<entry xmlns='http://www.w3.org/2005/Atom' xmlns:gd='http://schemas.google.com/g/2005'>\
					<category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/g/2005#event'></category>\
					<title type='text'>" + request.eventTitle + "</title>\
					<content type='text'>" + request.eventDetails + "</content>\
					<gd:transparency value='http://schemas.google.com/g/2005#event.opaque'>\
					</gd:transparency>\
					<gd:eventStatus value='http://schemas.google.com/g/2005#event.confirmed'>\
					</gd:eventStatus>\
				  	<gd:where valueString='" + request.eventLocation + "'></gd:where>\
					<gd:when startTime='" + request.eventDate + "T" + request.eventStartTime + "'\
				  		   endTime='" + request.eventDate + "T" + request.eventEndTime + "'></gd:when>\
				</entry>"
			};
									
			oauth.sendSignedRequest(url, callback, theRequest);
		}
	});