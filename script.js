document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});


var lines = ["Riley","Mackey","MyEclairKey","********","********","mackeyriley@gmail.com","mackeyriley@gmail.com"];
var counter = -1;
var typeLoop;
var lines2 = ["Gemini","Guinea Pig","INTJ","Water filter, sunscreen, shovel, gun"];
var change = -1;


$(document).keydown(function(e){
	if(e.key == "Enter"){
		counter = counter+1;
		typeText(lines[counter],70,'label:eq('+counter+')');
	}
	if(e.key == "Backspace"){
		change = change+1;
		typeText(lines2[change],70,'label:eq('+change+')');
	}
})

function typeText(string, speed, destination='#mainText', callback=function(){}) {
  if(typeLoop){clearInterval(typeLoop)}
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