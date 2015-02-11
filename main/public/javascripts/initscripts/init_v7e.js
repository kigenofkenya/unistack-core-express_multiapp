
var appC=document.getElementById("appC");
var appV=document.getElementById("appV");



//splash mode - vueH and SplashMode
var vueH=function(e){
  [].forEach.call( appV.querySelectorAll('.content__item'),
    function  fn(elem){
      if(elem.classList.contains('active')){
        document.getElementById(elem.id).classList.remove('active');
        setTimeout(function() {
          document.getElementById('tile'+elem.id).classList.remove('active');
      }, 400);
    }
  });
  e.preventDefault();
};

function splashMode(e){
    event.stopPropagation();
    if (e.target.className.indexOf('tiles') > -1) {
      // alert(e.target.getAttribute('data-tile'));
        // myclass_click_handler(e.target.id);
  
        document.getElementById(e.target.id).classList.toggle('active');
    
     document.getElementById(e.target.getAttribute('data-tile')).classList.toggle('active');
 e.preventDefault();
    }else if (e.target.className.indexOf('content-back') > -1) {

      // e.target.classList.remove('active');
       vueH(e);
        e.preventDefault();
        // alert('clicked content');
    }else{
      // alert("clicked elsewhere");
    }
   
}





(function() {

	if(prevPage=="appmode-splash"){
		console.log("splash mode..public");
		window.addEventListener("click", splashMode);
	}
	else if(prevPage=="appmode-core"){
		console.log("core mode....expected user");
		window.addEventListener("click", splashMode);
	}
	else{
		console.log("appmode unknown");
	}
// console.log(prevPage);
// console.log(prevState);
})();	