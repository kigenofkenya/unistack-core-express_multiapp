

var memArr=[];
function trackchanges(q,datain){
var thisparent=document.getElementById(q.target.id).parentNode.id;
var cid=thisparent.slice(thisparent.lastIndexOf("_")+1);

indexes = memArr.map(function(obj, index) {
    if(obj.id == cid) {
        return index;
    }
}).filter(isFinite);

if (indexes.length==0){
		memArr.push({id:cid,fielddata_name:datain});
		console.log("not in array, created");
}
else{
	memArr[indexes[0]] = {id:cid,fielddata_name:datain};
	console.log("in array, memArr edited");
}
}



(function() {


	
document.querySelector("#targ").innerHTML = "testdata";

document.querySelector("#table1").addEventListener("click", editFUNC);
document.querySelector("#uploadbutt").addEventListener("click", serverFUNC);



})();	


function serverFUNC(){

	console.log("server function called");
	console.log(JSON.stringify(memArr));
}


