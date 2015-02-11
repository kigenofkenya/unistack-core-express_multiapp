var apiroot="http://localhost:3000/example/api/";

var rad = document.table_radio.tRads;
var ul = document.getElementById("trec_list");
var vstage=document.getElementById("viewrec");
var prev = null;

var transobj={
	"tset1":"suppliers",
	"tset2":"products",
	"tset3":"items"
};

//get callbacks
function getCB(retdata){ul.insertAdjacentHTML("beforeEnd", retdata);}
function getrecCB(retdata){vstage.insertAdjacentHTML("beforeEnd", retdata);}
//post callbacks
function postCB1(retdata){console.log(retdata);}
function postCB2(retdata){console.log(retdata);}
function postCB3(retdata){console.log(retdata);}


/*###########/

/*###########*/
var reclistHandler=function(e){
	while(vstage.hasChildNodes()) {vstage.removeChild(vstage.lastChild); }
	if(e.target.hasAttribute("data-rec_action")) {
		var reqaction=e.target.getAttribute("data-rec_action");
		if( reqaction == "delete"){
			alert("deleting");
		}else if(reqaction == "view"){
				AjaxHandler.get(apiroot+ e.target.getAttribute("data-section")+'?qt='+e.target.parentNode.getAttribute("data-rec_id"),getrecCB);
		document.getElementById("tab-5").checked = true;
		}


  		event.preventDefault();  
  	}
};
 var tabHandler = function () {
       var toggle = event.target;
       var reqtab="";
      if ( toggle.hasAttribute('data-tab') ) {
        tabstate= toggle.getAttribute('data-tab');
        if(tabstate==reqtab){
          event.preventDefault();  
        }else{
          tabstate=reqtab;
          console.log(reqtab);
          document.getElementById(toggle.getAttribute('data-tab')).checked = true;
        }
        event.preventDefault();        
        // someMethod( the, arguments, to, pass, in );
      }
};

(function() {

//fire up table selector
for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
        (prev)? console.log(prev.value):null;
        if(this !== prev) {
            prev = this;
            while (ul.hasChildNodes()) {
    		ul.removeChild(ul.lastChild);
			}
			document.getElementById("tab-4").checked = true;
			console.log("fetching tableset:" +transobj[this.value]);
			AjaxHandler.get(apiroot+transobj[this.value],getCB);
        }
        // set viewchange here
    };
}

//attatch event listeners
document.getElementById("trec_list").addEventListener('click', reclistHandler, false);
document.getElementById("ctlSet_2").addEventListener('click', tabHandler, false);


appModule_forms.init("form1",postCB1);
appModule_forms.init("form2",postCB2);
appModule_forms.init("form3",postCB3);
})();	



//AjaxHandler.post("http://localhost:3000/example/api",postCB,"name=Henry&devnote=Ford");

