var $ = function (selector) {
  return document.querySelector(selector);
};
var element = document.getElementById('links');


function myFunction(e) {
  e = e || event;   
  var target = e.target || e.srcElement; 
  if (target.nodeName != 'LI') return;
  var id = target.getAttribute("data-evt");
  alert(id );
  e.preventDefault();
  return false; // prevent url change
}

function attatchevent(container,callback){
document.getElementById(container).addEventListener('click',callback); 
}
function removeevent(container,callback){
document.getElementById(container).removeEventListener('click',callback); 
}

  
function switchevt(oldtarg,newtarg){
  removeevent(oldtarg,myFunction);
  attatchevent(newtarg,myFunction);
 }

  
//  switchevt("links1","links2");
  
  attatchevent("links1",myFunction);
  
  
  var targbox=document.getElementById("links1");
  var newi= document.createElement("LI");
  newi.setAttribute("data-evt","test5");
  var textnode = document.createTextNode("Link5");         // Create a text node
newi.appendChild(textnode); 
  targbox.appendChild(newi);




  <h3>links1</h3>
<ul id="links1">
    <li data-evt="test1" class="dynamic-link">List item 1</li>
    <li data-evt="test2" class="dynamic-link">List item 2</li>
    <li data-evt="test3" class="dynamic-link">List item 3</li>
    <li data-evt="test4" class="dynamic-link">List item 4</li>
</ul>
<h3>links2</h3>
<ul id="links2">
    <li data-evt="test1" class="dynamic-link">List item 1</li>
    <li data-evt="test2" class="dynamic-link">List item 2</li>
    <li data-evt="test3" class="dynamic-link">List item 3</li>
    <li data-evt="test4" class="dynamic-link">List item 4</li>
</ul>