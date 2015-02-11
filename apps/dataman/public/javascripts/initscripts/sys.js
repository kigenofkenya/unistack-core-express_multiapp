

 (function() {
 		var post_fcall= function(){ 
 			alert("fail");
 		};


 	 var post1_scall= function(retdata){
 	 	// alert(retdata);
 	 	alert("form1 submitted");
 	 };
		var post1_callback={success:post1_scall,fail:post_fcall};
appModule_forms.init("form1",post1_callback);

 var post2_scall= function(retdata){
 	 	// alert(retdata);
 	 	alert("form2 submitted");
 	 };
	var post2_callback={success:post2_scall,fail:post_fcall};
appModule_forms.init("form2",post2_callback);
})();


