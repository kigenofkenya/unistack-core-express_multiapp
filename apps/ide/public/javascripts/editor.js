
      	 $('[data-action="showNameDialog"]').on('click', function(evt){
		  evt.preventDefault();
	  	  $('#dlgName').modal();
	    });	
	  $('#nameDialog').on('submit', function(evt){
	  	  evt.preventDefault();
		  var name = $(this).find('input[name="name"]').val();
		  window.location = '/test/' + name;
	  });  