function editFUNC(e) {
	if (e.target.className.indexOf('editable') > -1) {
       edit_handler(e.target.id);
       console.log("editfunc");
	}
}

function edit_handler(trigger_src){

	// console.log("trigger edit handler"+trigger_src);
	var intext=document.getElementById(trigger_src).textContent;

	document.getElementById("table1").removeEventListener("click", editFUNC);
	document.getElementById(trigger_src).setAttribute("contenteditable",true);
	if(intext=='no data'){
		document.getElementById(trigger_src).innerHTML='';
	}
	// document.getElementById(trigger_src).focus();
	placeCaretAtEnd( document.getElementById(trigger_src) );
	document.getElementById(trigger_src).addEventListener("keydown", keyINT);
	document.getElementById(trigger_src).addEventListener("blur", posteditFUNC);
	document.querySelector("#targ").innerHTML = "edit triggered by:"+trigger_src;
}
function keyINT(e){
	    if (e.keyCode == 13)
    {
    	posteditFUNC(e);
        return false;
    }
}

function posteditFUNC(e){
	// console.log("posteditfunc");
document.getElementById(e.target.id).removeEventListener("onkeypress", keyINT);
	var outtext=document.getElementById(e.target.id).textContent;
	if(outtext==''){
		document.getElementById(e.target.id).innerHTML='undefined';
	}else{

		trackchanges(e,outtext);
	}
	document.querySelector("#targ").innerHTML = "post edit:"+outtext;
	document.getElementById(e.target.id).setAttribute("contenteditable",false);
	document.getElementById(e.target.id).removeEventListener("blur", posteditFUNC);
	document.getElementById("table1").addEventListener("click", editFUNC);
}