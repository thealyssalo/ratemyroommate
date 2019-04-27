//This is the code that will be injected on any page

$(document).keydown(function(e){
	//this gets the keycode of the last key pressed
	//lookup at keycode.info
	//the '\' key
	if(e.which == 220){
		chrome.runtime.sendMessage({toggleScript:true})
		//then we do some other code
	}

})

//put the changes you want to make here
changeWebContent();
setTimeout(changeWebContent, 3000)

function changeWebContent(){
		//why isn't this working
		$('label').text("Who are you?")
}

function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}
	
