// /**
//  * Created by kyawtun on 14/11/14.
//  */



// document.getElementById('load').onclick = function(e) {

// var link="indexObj";
// var client = new XMLHttpRequest();
// client.open('GET', '/get/'+link);
// client.onreadystatechange = function() {


// document.getElementById("statbox").innerHTML=("server data loaded");
//     var json = JSON.parse(client.responseText);
    
// //     db.put('todo', json).done(function() {
// //       init();
// //     })
// // }
// client.send();


// // alert("load test");
// e.preventDefault();
// };

// document.getElementById('save').onclick = function(e) {

// // getAllTodoData(function(rets){
// 	var rawArray=getAllTodoData();
// // console.log(rawArray);
// // var r = new XMLHttpRequest(); 
// // r.open("POST", "/put", true);
// // r.onreadystatechange = function () {
// // 	if (r.readyState != 4 || r.status != 200) return; 
// // 	console.log(r.responseText);
// // };
// // r.send("a=1&b=2&c=3");

// var postorigin='todoindex';
// var postdata=JSON.stringify(rawArray);
// // var postdata=rawArray;
// // var postdata={"data":JSON.stringify(rawArray)};
// var link="/put";
// 	var r = new XMLHttpRequest();
// r.open("POST", link, true);
// r.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" ); // only for POST requests
// r.onreadystatechange = function () {
//   if (r.readyState != 4 || r.status != 200) return;
//   	console.log(r.responseText);

// };
// r.send('origin='+postorigin+'&data='+postdata); // for POST requests



// // var link="todoObj";
// // var client = new XMLHttpRequest();
// // client.open('POST', '/put/'+link);
// // client.onreadystatechange = function() {
// // document.getElementById("statbox").innerHTML=(client.responseText);
// // }
// // client.send();

	
  
// e.preventDefault();
// };
