

var loginhandle={
	test1:function(){
		alert("login handle test1");
	},
	prelogin:function(){
			 document.querySelector("#loginctl1").addEventListener('click', function(e) {
     msgBox("test title","loginform","login");
      e.stopPropagation(); // Keep document.click from firing
  });
	},



	test2:function(msg){
		if(typeof msg.err !=="undefined"){
			alert("error on login");
			return;
		}
		alert("login handle went okay");
	}
};
// (function() {
// document.querySelector("#targ").innerHTML = "testdata";

// })();	

/*
document.querySelector("#targ").innerHTML = "testing msgbox and login";
// document.querySelector("#msgModal").classList.add("shown");
// document.querySelector("#msgModal").querySelector(".msg_title").innerHTML = "testdata";



  document.querySelector("#loginctl1").addEventListener('click', function(e) {
     msgBox("test title","test message");
      e.stopPropagation(); // Keep document.click from firing
  });
document.getElementById('msgModal').addEventListener('click', function(e) {
    if (e.target.className.indexOf('msgct') > -1) {
      msgbox_clickHandler(e);

    }
});
function msgbox_clickHandler(e) {
if(e.target.getAttribute("id")==="acceptMsg"){
    msgbox_postHandler("message accepted");
  }else if(e.target.getAttribute("id")==="cancelMsg"){
    msgbox_postHandler("message rejected");
  }
}

function msgbox_postHandler(msg){
	document.querySelector("#targ").innerHTML = msg;
	document.querySelector("#msgModal").classList.remove("shown");
}
*/