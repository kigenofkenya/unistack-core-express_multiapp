var AjaxHandler={

callAjax:function(type,url, callback,reqheader,dataparams){
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
    this.callAjax("POST",url,callback,"application/x-www-form-urlencoded",dataparams);
},
delete:function(url,callback){
    this.callAjax("DELETE",url,callback,"application/x-www-form-urlencoded");
}
};