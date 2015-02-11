


var postTOOL= function(link,postdata,callback){
	var r = new XMLHttpRequest();
r.open("POST", link, true);
r.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" ); // only for POST requests
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  callback.success(r.responseText);

};
r.send(postdata); // for POST requests
};