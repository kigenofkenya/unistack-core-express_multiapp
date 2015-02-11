
//needs hookup with list icons type and ace
$(document).ready(function() {

  bindGUI();

//   function getlist(link){
// var client = new XMLHttpRequest();
// client.open('GET', './ioBIN/'+link);
// client.onreadystatechange = function() {
// document.getElementById("txtbox").innerHTML=(client.responseText);
// }
// client.send();
// }
 
// }); 

// var el = document.getElementById("targ");
// el.innerHTML=wrapped;

function reqFile(root,link){
var client = new XMLHttpRequest();
client.open('GET', root+'/get/'+link);
client.onreadystatechange = function() {
document.getElementById("txtbox").innerHTML=(client.responseText);
}
client.send();
}


var evt_class= function(e){
  // alert("test");
 //Checks for (data-evt)attrbute in the elem.target and  (data-evc) in the parent to dispatch to that custom event.
    if (e.target.hasAttribute("data-uri")) {
      // alert("data uri");
   reqFile(e.target.getAttribute("data-reqroot"),e.target.getAttribute("data-uri"));
       
    }
     e.preventDefault();
};  

var eventStage=document.getElementById("asset_list");
eventStage.addEventListener("click", evt_class);

// document.getElementById('targ').onclick = function(e) {
//   e = e || event;   
//   var target = e.target || e.srcElement; 
//   if (target.nodeName != 'LI') return;
//   var id = target.id;
//   dispFile(id );
//   event.preventDef
//   return false; // prevent url change
// };




 
}); 