
//this is a background script, it runs consistently in the background,
//useful if you need to keep track of info between pages
//or have stuff you don't want to load on every page

var timeouts = [];
var scriptRunning = false;

chrome.extension.onMessage.addListener(
  function(message, sender, sendResponse) {
  	if(message.toggleScript){
      if(!scriptRunning){
        runScript()
      } else {
        resetScript()
      }
      scriptRunning = !scriptRunning
    }
});
function runScript(){
  changeUrl("punahou.edu",0)
  changeUrl("newschool.edu",20)
  openNewTab("nytimes.com",40)
}

//these functions take in a url and a time in seconds
function changeUrl(newUrl, time){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl}
    chrome.tabs.update({ url: newUrl });
  }, time * 1000)
  timeouts.push(newTimeout)
}
function openNewTab(newUrl, time){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl}
    chrome.tabs.create({ url: newUrl });
  }, time * 1000)
  timeouts.push(newTimeout)
}
function openNewWindow(newUrl, time, left=0, top=0, width=500, height=400 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000)
  timeouts.push(newTimeout)
}

function checkWebAddress(url) {
    return window.location.href.indexOf(url) >= 0
}

function resetScript(){
  for(var i = 0; i < timeouts.length; i++){
    clearTimeout(timeouts[i])
  }
}