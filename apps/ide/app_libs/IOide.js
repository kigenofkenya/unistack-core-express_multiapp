 path = require('path');
var async = require('async');
fs = require('fs');
var mde = require('markdown-extra');


	
function refresh(files,cb) {
var procBuff=[];
    async.map(files, fs.readFile, function (err, data) {
        for(var i = 0, l = data.length ; i < l ; i++) {
				var aC=data[i].toString();
//				var title = mde.heading(aC);
//
var metaObj='{'+mde.metadata(aC)+'}';
//console.log(JSON.parse(metaObj));
//console.log(str.slice(str.lastIndexOf("/")+1));
            procBuff.push({"file":files[i].slice(files[i].lastIndexOf("/")+1),"title":mde.heading(aC), "meta":JSON.parse(metaObj)});
        }
cb(procBuff);
    });


}

module.exports = {
	checkParent:function(){
		console.log(path.dirname(module.parent.filename));
	},
	checkPwd: function(){
		console.log(process.cwd());
	},
	indexMD:function(mdfiles){
  	
		refresh(mdfiles,function(rets){
			console.log(rets);
		});
	}

};
