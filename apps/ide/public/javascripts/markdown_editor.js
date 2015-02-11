


var iEl = document.getElementById('input');
var oEl = document.getElementById('output');

var active_editor="";

var md = new Showdown.converter();


var IDE_activate={
	
	markdown:function(rawmd){
		oEl.innerHTML = md.makeHtml(rawmd);
		console.log("markdown active");
	},
	jade:function(){
		console.log("activated jade");
	},
	trips:function(){
		console.log("activated trips");
	}
};





var update = function() {
  var t = iEl.value;
  IDE_activate[active_editor](t);
};


function reqFile(link,type){
var client = new XMLHttpRequest();
client.open('GET', '/ide/redo/'+link);
client.onreadystatechange = function() {
			if(client.readyState == 4){ 
iEl.innerHTML=(client.responseText);
 IDE_activate[type](client.responseText);
		}


}
client.send();

}

var evt_class= function(e){
	e = e || event;   
  var target = e.target || e.srcElement; 


   if (target.nodeName != 'A')   iEl.addEventListener('keydown', update);

 //will be used later to discriminate for jade/markdown/trips
  
    if (e.target.hasAttribute("data-uri")) {
           if (active_editor == '' ||  active_editor == e.target.getAttribute("data-ftype") ){
     	active_editor=e.target.getAttribute("data-ftype");
     }
   reqFile(e.target.getAttribute("data-uri"),active_editor);
      iEl.addEventListener('keydown', update);
    }
     e.preventDefault();
};  


(function() {
	var mdStage=document.getElementById("assets_md");
mdStage.addEventListener("click", evt_class);

})();
