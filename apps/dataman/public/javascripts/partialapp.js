
var initapp=function(){

// document.querySelector("#targ").innerHTML = App.app();

}


var inject=function(e){

	var trigi=e.target.getAttribute('data-trig');

		 var xhReq = new XMLHttpRequest();
 xhReq.open("GET", "/dataman/"+trigi, false);
 xhReq.send(null);

 document.getElementById('inject').innerHTML=xhReq.responseText;
 	 fetchi= document.getElementById("pscript").getAttribute('data-uri');
 
       var head = document.getElementsByTagName('head')[0];
       if(head.getElementsByTagName('script')[1]){
       head.removeChild(head.getElementsByTagName('script')[1]);
       }




       
           // if(typeof App.app !=='undefined'){
           // 	delete App.app;
           // 	delete app;
           // }
        

			function boom(){
				if (!app){
				var script = document.createElement('script');
        		script.setAttribute("type", "text/javascript");
        		script.setAttribute("src", '/dataman/javascripts/pagescripts/'+fetchi+'.js');
            	script.onload = boom;
			    head.appendChild(script);
      			return;
     			}
 	 			console.log(app.init());
 				
	// App.test1();


				};

  
};

(function() {
	
document.querySelector("#targ").innerHTML = " partial app testdata";
document.querySelector("#trig1").addEventListener('click',inject);
document.querySelector("#trig2").addEventListener('click',inject);
})();	

