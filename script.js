document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

meSpeak.loadConfig("mespeak_config.json");
/*Anderson, Todd. "speech-bubble". JavaScript (jQuery). https://glitch.com/edit/#!/speech-bubble?path=script.js:4:12*/ 

var lines = ["Riley","Mackey","MyEclairKey","••••••••","••••••••","mackeyriley@gmail.com","mackeyriley@gmail.com",
			 "Student","Early","Quiet","Cooks sometimes"];
var counter = +1;

$(document).keydown(function(e){
	if(e.key == "Enter"){
		counter = counter-1;
		$('label').text("");
		typeText(lines[counter],55,'label');
	}
})

function typeText(string, speed, destination='#mainText', callback=function(){}) {
  if(typeLoop){clearInterval(typeLoop)}
  clearTimeout(bubbleFade)
  c = 0;
  $('#textDiv').fadeIn()
    var dest = $(destination);
    dest.text("");
    
    typeLoop = setInterval(function () { //basically a while loop with a delay between each iteration
        if (c >= string.length) {
            $(dest).html(string);
            clearInterval(typeLoop);
            callback()
            //bubbleFade = setTimeout(function(){$('#textDiv').fadeOut()},1000)//
            c = 0;
        } else {
            $('<span>').text(string[c]).
            appendTo(dest);
            c += 1;
        }
    }, speed); //this is the delay in milliseconds between each character, increase to slow down, decrease to speed up
};