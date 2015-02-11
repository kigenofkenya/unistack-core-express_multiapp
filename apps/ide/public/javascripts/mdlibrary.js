
(function() {




// document.querySelector("#msgModal").classList.add("shown");
// document.querySelector("#msgModal").querySelector(".msg_title").innerHTML = "testdata";

cbCancel=function(ret){
  console.log(ret+"from within main app");
}
cbAccept=function(ret){
  window.location.href = '/ide/edit?name='+ret;
}

  document.querySelector("#dev_1").addEventListener('click', function(e) {
     msgBox.announce("test title","test message");
     e.preventDefault();
      e.stopPropagation(); // Keep document.click from firing
  });
document.getElementById('msgModal').addEventListener('click', function(e) {
    if (e.target.className.indexOf('msgct') > -1) {

    msgBox.clickH(e,{"f":cbCancel,"s":cbAccept});

    }
});



var create=function(){
	var postorigin='mdcreate';
var postdata=JSON.stringify(rawArray);
// var postdata=rawArray;
// var postdata={"data":JSON.stringify(rawArray)};
var link="/put";
	var r = new XMLHttpRequest();
r.open("POST", link, true);
r.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" ); // only for POST requests
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  	console.log(r.responseText);
};
r.send('origin='+postorigin+'&name='+postdata); // for POST requests
}


})();	