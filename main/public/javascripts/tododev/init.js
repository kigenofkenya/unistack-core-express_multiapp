var apiroot="/";
function getCB(retdata){console.log(retdata);}
function postCB(retdata){console.log(retdata);}

var testH=function(){
  var testparam="todo_data/";
// AjaxHandler.get(apiroot+testparam,getCB);
  AjaxHandler.post(apiroot+testparam,JSON.stringify(tCache),"application/json; charset=UTF-8", postCB);
// console.log(JSON.stringify(tCache));
event.preventDefault();
};



(function() {


  riot.mount('todos', {todos:initdata.records});
document.getElementById("test1").addEventListener("click",testH);
})();



