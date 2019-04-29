//This is the code that will be injected on any page

$(document).keydown(function(e){
	//this gets the keycode of the last key pressed
	//lookup at keycode.info
	//the '\' key
	if(e.key == '/'){
		changeWebContent()
		//then we do some other code
	}
})

//put the changes you want to make here

function changeWebContent(){
		$('label').text("WHO ARE YOU?")
}

function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}
	
