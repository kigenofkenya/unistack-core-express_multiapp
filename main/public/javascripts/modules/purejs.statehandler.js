//statehandler version 2


document.body.addEventListener('click', function(e) {
    if (e.target.hasAttribute("data-state")) {
        state_handler(e.target.getAttribute("data-state"));
        e.preventDefault();
    }else if(e.target.hasAttribute("data-page")) {
        page_handler(e.target.getAttribute("data-page"));
        e.preventDefault();
    }
    
});
    
function state_handler(state){
    reqstate='state-'+state;
if(!document.body.classList.contains(reqstate)){
    document.body.classList.remove(prevState);
prevState=reqstate;
document.body.classList.add(reqstate);
}
}
function page_handler(page){
    reqpage='appmode-'+page;
 
if(!document.body.classList.contains(reqpage)){
    document.body.classList.remove(prevPage);
prevPage=reqpage;
document.body.classList.add(reqpage);
}
}

