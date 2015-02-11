var AjaxHandler={

callAjax:function(type,url, callback,dataparams,reqheader){
    var r = new XMLHttpRequest();
    r.open(type, url, true);
    if(reqheader){
        r.setRequestHeader( "Content-type", reqheader );
    }
    r.onreadystatechange = function(){
        if (r.readyState == 4 && r.status == 200){
            callback(r.responseText);
        }
    };

    r.send(dataparams);
},
get:function(url,callback){
    this.callAjax("GET",url,callback);
},
post:function(url,dataparams,callback){
    this.callAjax("POST",url,callback,dataparams,"application/x-www-form-urlencoded");
}
};