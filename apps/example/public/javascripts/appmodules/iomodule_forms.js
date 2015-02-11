var appModule_forms={

    init: function (formbox_id,callback) {
      console.log("app module for forms called");
    	this.eventsHook(formbox_id,callback);
	  },
	eventsHook: function (formbox_id,callback) {

		function hasHtml5Validation () {
  return typeof document.createElement('input').checkValidity === 'function';
}

	  var subtarget = document.getElementById(formbox_id);
	  var activeform=subtarget.getElementsByTagName("FORM")[0];

		if (hasHtml5Validation()) {
			console.log("html5 validation present");
	  activeform.addEventListener("submit", function(e) {
		    console.log("form validating");
    if (!this.checkValidity()) {
      
        e.target.classList.add("invalid");
        // console.log(this.getAttribute("id"));
        document.querySelector('#status').innerHTML = "invalid";
        // $('#status').html('invalid');
      } else {
        e.target.classList.remove("invalid");
        varhold=activeform.getAttribute("name");
        document.querySelector('#status').innerHTML = "form: "+ varhold+" is valid!";
        	appModule_forms.formPost(activeform,callback);
      }
		// console.log(serialize(activeform));
	
		// 	// post_submit(serialize(activeform));


			e.preventDefault();
		});
			
		}else{
			console.log("no validating on browser");
		}


	},


	formValidate: function (thisform,callback) {
function hasHtml5Validation () {
  return typeof document.createElement('input').checkValidity === 'function';
}

if (hasHtml5Validation()) {
  // var thisform=document.getElementsByTagName("FORM")[1];
  thisform.addEventListener("submit", function(e) {
    console.log("form validating");
    if (!this.checkValidity()) {
      
        e.target.classList.add("invalid");
        // console.log(this.getAttribute("id"));
        document.querySelector('#status').innerHTML = "invalid";
        // $('#status').html('invalid');
      } else {
        e.target.classList.remove("invalid");
        varhold=thisform.getAttribute("name");
        document.querySelector('#status').innerHTML = "form: "+ varhold+" is valid!";
        	appModule_forms.formPost(thisform,callback);
      }
  });
}

	  },
	formPost: function (thisform,callback) {
		var formobj = serialize(thisform);
		var formurl = thisform.action; 

      

        io.emit('posts:create', formobj);
      	// postTOOL(formurl,formobj,callback);
	  }
};