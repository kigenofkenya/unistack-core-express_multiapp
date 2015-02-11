

var el = function(element){
  return document.getElementById(element);
}
var apiroot="/dbcluster/api/";

var rad = document.table_radio.tRads; // the list on the left with the suppliers/products/etc
var ul = document.getElementById("trec_list");
var vstage=document.getElementById("viewrec");
var prev = null;

var transobj={
  "tset1":{"name":"suppliers","tabForm":"tab-1"},
  "tset2":{"name":"products","tabForm":"tab-2"},
  "tset3":{"name":"items","tabForm":"tab-3"}
};



var eventclass_one = function(e) {
  var typeObj=JSON.parse(e.detail);

  console.log(typeObj);
  // alert("class 1"+typeObj.tab);
  document.getElementById(typeObj.tab).checked = true;
  // radiobtn = document.getElementById(typeObj.tab);
//  document.getElementById('console1').innerHTML=(typeObj.pane); // Prints "Example of an event"
};

var eventclass_two = function(e) {
  var typeObj=JSON.parse(e.detail);
  console.log(typeObj);
  document.getElementById(typeObj.tab).checked = true;
};
var eventclass_three = function(e) {
  var typeObj=JSON.parse(e.detail);
  console.log(typeObj);
  document.getElementById(typeObj.tab).checked = true;
};


document.addEventListener("event-class-one", eventclass_one);
document.addEventListener("event-class-two", eventclass_two);
document.addEventListener("event-class-three", eventclass_three);


class1_event1 = new CustomEvent('event-class-one', { 'detail': '{"tab":"tab-1","asset":"form"}' });
class1_event2 = new CustomEvent('event-class-one', { 'detail': '{"tab":"tab-5","asset":"inspector"}' });
class1_event3 = new CustomEvent('event-class-one', { 'detail': '{"tab":"tab-7","asset":"view table"}' });

class2_event1 = new CustomEvent('event-class-two', { 'detail': '{"tab":"tab-2","asset":"form"}' });
class2_event2 = new CustomEvent('event-class-two', { 'detail': '{"tab":"tab-5","asset":"inspector"}' });
class2_event3 = new CustomEvent('event-class-two', { 'detail': '{"tab":"tab-7","asset":"view table"}' });

class3_event1 = new CustomEvent('event-class-three', { 'detail': '{"tab":"tab-3","asset":"form"}' });
class3_event2 = new CustomEvent('event-class-three', { 'detail': '{"tab":"tab-5","asset":"inspector"}' });
class3_event3 = new CustomEvent('event-class-three', { 'detail': '{"tab":"tab-7","asset":"view table"}' });


evObj={
  class1:{
  'event1':class1_event1,
  'event2':class1_event2,
  'event3':class1_event3
  },  
  class2:{
  'event1':class2_event1,
  'event2':class2_event2,
  'event3':class2_event3
  },
    class3:{
  'event1':class3_event1,
  'event2':class3_event2,
  'event3':class3_event3
  }
};
//document.dispatchEvent(event1);
var classes={
  'class1':evObj.class1,
  'class2':evObj.class2,
  'class3':evObj.class3
}

var activeclass=classes['class1'];

// END EVENT MODULE



//get callbacks
function getCB(retdata){ul.insertAdjacentHTML("beforeEnd", retdata);}
function getrecCB(retdata){vstage.insertAdjacentHTML("beforeEnd", retdata);}
//post callbacks
function postCB1(retdata){console.log(retdata);}
function postCB2(retdata){console.log(retdata);}
function postCB3(retdata){console.log(retdata);}

function deleteCB1(retdata){
var retObj=JSON.parse(retdata);

var eject=document.getElementById('li_'+retObj.remID);
  console.log("deleted item:"+retObj.remID);
eject.parentNode.removeChild(eject);


}

/*###########/

/*###########*/


var reclistHandler=function(e){
	while(vstage.hasChildNodes()) {vstage.removeChild(vstage.lastChild); }
	if(e.target.hasAttribute("data-rec_action")) {
		var reqaction=e.target.getAttribute("data-rec_action");
		if( reqaction == "delete"){
      AjaxHandler.delete(apiroot+'delete/'+e.target.parentNode.parentNode.getAttribute("data-rec_id"),deleteCB1);
			// alert(e.target.parentNode.parentNode.getAttribute("data-rec_id"));
		}else if(reqaction == "view"){

				AjaxHandler.get(apiroot+ e.target.getAttribute("data-section")+'?qt='+e.target.parentNode.getAttribute("data-rec_id"),getrecCB);
		document.getElementById("tab-5").checked = true;
		}


  		event.preventDefault();  
  	}
};


var headHandler=function(e){
   if (e.target.hasAttribute("data-evt")) {
          document.dispatchEvent(activeclass[e.target.getAttribute("data-evt")])
    }
 e.preventDefault();
};

var metaInject=function(set){
document.getElementById('viewmeta').innerHTML="<h2>viewing meta for set"+set+"</h2>";
document.getElementById("tab-6").checked = true;
};

(function() {

//fire up table selector
for(var i = 0; i < rad.length; i++) {
  //swith class here
    rad[i].onclick = function() {
        (prev)? console.log(prev.value):null;
        if(this !== prev) {
          activeclass=classes[this.getAttribute("data-evr")];
          // console.log(this.getAttribute("data-evr"));
          // console.log(this.getAttribute('data-evr'));
          console.log(this.value);
            prev = this;
            while (ul.hasChildNodes()) {
    		ul.removeChild(ul.lastChild);
			}
      //############TAB STATE!


			metaInject(transobj[this.value]["name"]);
			console.log("fetching tableset:" +transobj[this.value]["name"]);
			AjaxHandler.get(apiroot+transobj[this.value]["name"],getCB);


        }
        // set viewchange here
    };
}

//attatch event listeners
document.getElementById("trec_list").addEventListener('click', reclistHandler, false);
document.getElementById("header_control").addEventListener('click', headHandler, false);

//CTLSET 2 is thetop menu
// document.getElementById("ctlSet_2").addEventListener('click', tabHandler, false);


appModule_forms.init("form1",postCB1);
appModule_forms.init("form2",postCB2);
appModule_forms.init("form3",postCB3);
})();	



//AjaxHandler.post("http://localhost:3000/example/api",postCB,"name=Henry&devnote=Ford");

