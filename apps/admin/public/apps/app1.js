


// USAGE - get    ::   jsCookies.get("cookie_name_here");  [returns the value of the cookie]
// USAGE - set    ::   jsCookies.set("cookie_name", "cookie_value", 5 );  [give name, val and # of days til expiration]
// USAGE - check  ::   jsCookies.check("cookie_name_here");  [returns only true or false if the cookie exists or not]



(function() {

// console.log(pageToken);
document.querySelector("#targ").innerHTML = "testdata";
if(jsCookies.check("cookiePgsec_"+pageToken)){
	//get cookie
	document.getElementById(jsCookies.get("cookiePgsec_"+pageToken)).click();
console.log("cookie found and section set");
		// console.log("cookie found"+jsCookies.get("cookiePgsec_"+pageToken));
	; 
}
var sectrig=document.querySelector("#section-nav");
sectrig.onclick = function(event) {
  event = event || window.event
  var target = event.target || event.srcElement
  
  while(target != sectrig) { // ( ** )
    if (target.nodeName == 'A') { // ( * )
     

     jsCookies.set("cookiePgsec_"+pageToken, target.id, 5 );
     console.log("section cookie set");
       // e.target.id
           // event.preventDefault();
       return;
    }
    console.log("outside loop for target... help!");
    // target = target.parentNode
  }

    event.preventDefault();
}
})();	