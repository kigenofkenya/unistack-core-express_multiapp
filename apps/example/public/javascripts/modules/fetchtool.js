var fetchTOOL = function(link,callback){
	var flag=0;
var client = new XMLHttpRequest();
client.open('GET', link);
client.onreadystatechange = function() {


	 if (client.readyState ==1 ){
	alert("processing 1");
	}else  if (client.readyState ==2 ){
		if(client.readyState == 4){ 
alert("success");
		}
	
	}else  if (client.readyState ==3 ){
		flag++
	// alert("processing 3");
	}
	else if(client.readyState == 4){ 
		
		if(flag==0){
callback.fail();
		}else if(flag==1){
	 //client.responseText; 
	callback.success(client.responseText);
	}

}else{alert("outside scope");}
//readystates 
//2
//4 success


	

}

client.send();
}
