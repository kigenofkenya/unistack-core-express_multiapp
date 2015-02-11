var api_root="/example"
var apiprefix='api';
var pagestate='initial';
var panestate="";
var tabstate='tab-1';


var scall= function(retdata){
     document.querySelector("#target").innerHTML = retdata;
};
var fcall= function(){ alert("fail");};
var callback={success:scall,fail:fcall};


function fetchrec(recid){
var callback5={success:function(retdata){
    console.log("sucesss");
       document.querySelector("#viewrec").innerHTML = retdata;
 document.getElementById("tab-1").checked = true;
},fail5:function(){ alert("fail");}};
    fetchTOOL(api_root+"/"+apiprefix+"/"+"viewrec?qt="+recid,callback5);
}


 var recHandler = function () {
       var toggle = event.target;
       // || toggle.classList.contains('btn') 
       if ( toggle.hasAttribute('data-refid') ) {
        reqstate= toggle.getAttribute('data-refid');
        if(panestate==reqstate){
          event.preventDefault();  
        }else{
          console.log("getting item details"+reqstate);
          fetchrec(reqstate);
          panestate=reqstate;

        }
        event.preventDefault();        
        // someMethod( the, arguments, to, pass, in );
}
};

//event handler for main controlbar
 var eventHandler = function () {
       var toggle = event.target;
       var reqstate="";
       // || toggle.classList.contains('btn') 
      if ( toggle.hasAttribute('data-fetch') ) {
       	reqstate= toggle.getAttribute('data-fetch');
        if(pagestate==reqstate){
        	event.preventDefault();  
        }else{
        	pagestate=reqstate;
          console.log(reqstate)
          //first fetch
        	fetchTOOL(api_root+"/"+apiprefix+'/'+reqstate,callback);
          //ajax2
        	        // alert(toggle.getAttribute('data-fetch'));
        }
        event.preventDefault();        
        // someMethod( the, arguments, to, pass, in );
      }
};


 var tabHandler = function () {
       var toggle = event.target;
       var reqtab="";
       // || toggle.classList.contains('btn') 
      if ( toggle.hasAttribute('data-tab') ) {
        tabstate= toggle.getAttribute('data-tab');
        if(tabstate==reqtab){
          event.preventDefault();  
        }else{
          tabstate=reqtab;
          console.log(reqtab);
          document.getElementById(toggle.getAttribute('data-tab')).checked = true;
                
        }
        event.preventDefault();        
        // someMethod( the, arguments, to, pass, in );
      }
};
	
  (function() {

var callback1={
  success:function(retdata){
       // state_handler("initial");
       console.log("transport success, checking data..");
       //add loading situation.
       console.log(retdata);
//parse if it's truly a sucess
     // document.querySelector("#target").innerHTML = retdata;
     document.getElementById("reclist").addEventListener('click', recHandler, false);
     // listctl(); 
      },
      fail:function(){ alert("fail");}};

//ALL BELOW POSTING

		var post_fcall= function(){ alert("fail");};
 	 var post1_scall= function(retobj){
      var r=JSON.parse(retobj);
    console.log(r.retmsg)
 	 };
var post1_callback={success:post1_scall,fail:post_fcall};
  var post2_scall= function(retdata){alert("form2 submitted");};
	var post2_callback={success:post2_scall,fail:post_fcall};
appModule_forms.init("form1",post1_callback);
appModule_forms.init("form2",post2_callback);

// fetchTOOL("/api",callback);
//side menu hook
document.getElementById("pageCtl").addEventListener('click', eventHandler, false);
document.getElementById("ctlSet_2").addEventListener('click', tabHandler, false);
//hook right 
fetchTOOL(api_root+"/"+apiprefix+'/suppliers',callback);
 	})();





