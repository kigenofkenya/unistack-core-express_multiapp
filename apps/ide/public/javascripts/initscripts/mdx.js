
var apiroot="/ide/get/";
 myTextArea = _('#editor-area'),
      btn =   _('#editor-control').getElementsByTagName('a');

function readyMD(){
editor = new Editor(myTextArea);
initCTL();
initSD();
startediting();
}


function getMDcb(retdata){
document.getElementById('editor-area').innerHTML=retdata;
readyMD();
	// ul.insertAdjacentHTML("beforeEnd", retdata);

}


function loadmd(){
AjaxHandler.get(apiroot+ 'test',getMDcb);
		
      document.getElementById("wrapper").className = "editmode";
      readyMD();
}

function loaddoc(e){
if(e.target.classList.contains('md')){

  //clear search
  loadmd();
    // alert("loading md file");

    //

}
 e.preventDefault();
}

function newdoc(){
	      document.getElementById("wrapper").className = "editmode";
readyMD();
	 e.preventDefault();
}

      $(window).on('content loaded', function(){
        $('search').on('keyup', search);
        $('files').on('click', loaddoc);
        $('newdoc').on('click', newdoc);
      });





//       editor = new Editor(myTextArea);
// initCTL();
// initSD();
// startediting();
