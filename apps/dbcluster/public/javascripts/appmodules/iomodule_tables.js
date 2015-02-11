

var appModule_tables={

    init: function (tablebox_id,callback) {
 
      console.log("app module for tables called");
    	this.eventsHook(tablebox_id,callback);

	  },
	eventsHook: function (tablebox_id,callback) {


	  // var subtarget = document.getElementById(formbox_id);
	  // var activetable=subtarget.getElementsByTagName("TABLE")[0];
var tabletrigger=document.getElementById('butt_ctl');
	  tabletrigger.addEventListener("click", function(e) {
          if (e.target.className.indexOf('butt') > -1) {
        appModule_tables.fetchParse(e.target.id);
        // alert(e.target.id);
    }
		 // alert("tabletrigger");
       // io.emit('fetch_table', 'table_id2');
        	// appModule_forms.formPost(activeform,callback);
			e.preventDefault();
		});


	},
    fetchParse: function (intarg) {
        io.emit('fetch_table', intarg);
    // preq=page.target.getAttribute("data-page");
  
    },
	dataPost: function (jsondata) {

	  }
};