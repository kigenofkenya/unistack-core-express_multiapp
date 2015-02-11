

document.body.addEventListener('click', function(e) {
    if (e.target.hasAttribute("data-state")) {
        state_handler(e.target.getAttribute("data-state"));
        e.preventDefault();
    }else if(e.target.hasAttribute("data-page")) {
        page_handler(e);
        e.preventDefault();
    }
    
});
	
function state_handler(state){
	teststate='state-'+state;
if(!document.body.classList.contains(teststate)){
document.body.className =teststate;
}
}
function page_handler(page){
		preq=page.target.getAttribute("data-page");
    urlreq= page.target.getAttribute("href");
		   state_handler(preq);
		setTimeout(function() {
window.location.href = urlreq;
}, 1000);

}