var fetchi;
var App={};
var scr;
 window.App=App;
function removeEvents(){
	console("removed events");
}

var cleanup = function (callback) {
if(window.app){
	 window.App={};
	 delete window.app;
	var head = document.getElementsByTagName('head')[0];
	head.removeChild(scr);
	 // var element = document.getElementById('partial_head');
// element.parentNode.removeChild(element);

	 console.log("small app deleted");
  callback();
}

    // delete window.cleanup;
};


var eHandle=function(e){

	 var xhReq = new XMLHttpRequest();
 xhReq.open("GET", "/dataman/partial", false);
 xhReq.send(null);
 var serverResponse = xhReq.responseText;
 // console.log(serverResponse); // Shows "15"


function injectToken(callback) {
	document.querySelector("#inject").innerHTML = serverResponse;
	document.getElementById("trig1").classList.add('undisplay');
document.getElementById("trig2").classList.remove('undisplay');
    callback();
}

injectToken(function() {
  initpartial();
	
});


};

var e2Handle=function(e){
	
	 var xhReq = new XMLHttpRequest();
 xhReq.open("GET", "/dataman/partial2", false);
 xhReq.send(null);
 var serverResponse = xhReq.responseText;
 // console.log(serverResponse); // Shows "15"


function injectToken(callback) {
	document.querySelector("#inject").innerHTML = serverResponse;
	document.getElementById("trig2").classList.add('undisplay');
document.getElementById("trig1").classList.remove('undisplay');

    callback();
}

injectToken(function() {
  initpartial();
	
});
};



(function() {
	
document.querySelector("#targ").innerHTML = " partial app testdata";
document.querySelector("#trig1").addEventListener('click',eHandle);
document.querySelector("#trig2").addEventListener('click',cleanup);
})();	


function initpartial(){
		 fetchi= document.getElementById("pscript").getAttribute('data-uri');
	
boom();
}




function boom(){
	console.log("boom");
  if (!window.app){
    var scr = document.createElement('script');
    scr.id = 'partial_head';
    scr.onload = boom;
    scr.src = '/dataman/javascripts/pagescripts/'+fetchi+'.js';
    document.head.appendChild(scr);
    return;
  }
  window.App=app;
	App.test1();


};