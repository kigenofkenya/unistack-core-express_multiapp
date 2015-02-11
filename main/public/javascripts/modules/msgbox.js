
    function msgBox(title, message,submitlabel){
      document.querySelector("#msgModal").querySelector(".msg_title").innerHTML = title;
      document.getElementById(message).classList.remove("undisplay");
      document.getElementById('acceptMsg').innerHTML =submitlabel;
      document.querySelector("#msgModal").classList.add("shown");
      msgPost();
    }

function msgPost(){
document.getElementById('msgModal').addEventListener('click', function(e) {
    if (e.target.className.indexOf('msgct') > -1) {
       msgbox_clickHandler(e);

    }
});

}
    function msgbox_clickHandler(e) {
if(e.target.getAttribute("id")==="acceptMsg"){
    msgbox_postHandler("posted");
  }else if(e.target.getAttribute("id")==="cancelMsg"){
 document.querySelector("#msgModal").classList.remove("shown");
  }
}

function msgbox_postHandler(msg){
  document.getElementById("formlogin").submit();
 document.querySelector("#targ").innerHTML = msg;
 document.querySelector("#msgModal").classList.remove("shown");
}
