var docinput;
var msgBox={
  announce:function(title,message){
         document.querySelector("#msgModal").querySelector(".msg_title").innerHTML = title;
      document.querySelector("#msgModal").querySelector(".msg_content").innerHTML = message;
      document.querySelector("#msgModal").classList.add("shown");
  },
  clickH:function(e,cb){
      docinput = document.getElementById('docname');
       msgBox[e.target.id](cb);
  },
  cancelMsg:function(callback){
    console.log("cancel");
        callback.f("cancelled");
         msgBox.clearMsg();

  },
  acceptMsg:function(callback){

  
    callback.s(docinput.value);
     msgBox.clearMsg();
  },
  clearMsg:function(){
   docinput.value="";
        document.querySelector("#msgModal").classList.remove("shown");
  }
};





