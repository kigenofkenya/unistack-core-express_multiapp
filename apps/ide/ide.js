var marked = require('marked');
var mde = require('markdown-extra');
var fs = require('fs');
var express = require('express');

var app_root='/ide'
var app_ide = express();
app_ide.set('view engine', 'jade');
app_ide.set('views', __dirname + '/views');
app_ide.use("/", express.static(__dirname + "/public"));



String.prototype.allReplace = function(obj) {
  var retStr = this
  for (var x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
  }
  return retStr
}

/// setup as before below

app_ide.get('/', function(req, res){
	fs.readdir(__dirname + '/md2', function(err, files){
				if(err) files = [];
		files = files.filter(isValidFile)
		     .filter(function(f){ return f.match(/\.md$/i); })
			.map(function(f) { return f.replace(/\.md$/i, ''); });

function isValidFile (child) {
  return (child !== '.DS_store' && child.indexOf('.') !== 0);
}
		// if(err) files = [];
		// files = files.filter(function(f){ return f.match(/\.md$/i); })
		// 	.map(function(f) { return f.replace(/\.md$/i, ''); });
			console.log(files);
		res.render('home', {root:app_root, pageTitle: 'Home', files: files });
	});
});



app_ide.get('/md3', function(req, res){
		var name=req.query.name;
	if(!req.query.name){
	name = "newmarkdown";
	}
		data = '';
		res.render('md3', 
			{ 
				root:app_root,
				pageTitle: 'Editing ' + name, 
				name: name, 
				content: data,
				pagemode:'stagemode',
				initscript:'mdx'
			});
});

app_ide.get('/md3/:docname', function(req, res){
		var docname = req.params.docname;

		data = '';
		res.render('md3', 
			{ 
				root:app_root,
				pageTitle: 'Editing ' + docname, 
				name: docname, 
				content: data,
				pagemode:'editmode',
				initscript:'md3e'
			});
});

// ############
// /* param route */
app_ide.get('/get', function(req, res) {
  res.send('paramtest root');
});

app_ide.get('/get/:id', function(req, res) {
		var reqid = req.params.id;
  console.log('paratest route with id:'+reqid);
var file = __dirname + '/md/'+reqid+'.md';
function md_parse(parsedMd){
  var docContent = mde.content(parsedMd);
  var meta = JSON.parse('{'+mde.metadata(parsedMd)+'}');
//  console.log(marked(docContent));

// var objmeta='{'+meta+'}';
console.log(meta);
res.send(docContent);
res.send
}
fs.readFile(file, 'utf8', function (err, rawMd) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
md_parse(rawMd.allReplace({'_pageURI_': '/', '_imageURI_': app_root+'/content/images/'}))
});

});
// ############



app_ide.get('/edit/:name', function(req, res){
	var name = req.params.name;
	fs.readFile(__dirname + '/md2/' + name + '.md', function(err, data){
		// if there's an error, it probably means the file doesn't exist,
		// meaning this is a new file: just set data to an empty string
		if(err) data = '';
		res.render('edit', { root:app_root,pageTitle: 'Editing ' + name, name: name, content: data });
	});
});

app_ide.post('/edit/:name', function(req, res){
	var name = req.params.name;
	fs.writeFile(__dirname + '/md2/' + name + '.md', req.body.content, function(err){
		if(err) return res.redirect('/');
		res.send("posted new doc succesfully");
		// res.redirect('/view/' + name);
	});
});

app_ide.get('/view/:name', function(req, res){
	var name = req.params.name;
	fs.readFile(__dirname + '/md2/' + name + '.md', { encoding: 'utf8' }, function(err, data){
		if(err) res.redirect('/');

		res.render('view', { root:app_root,pageTitle: 'Viewing ' + name, name: name, content: marked(data) });
	});
});

app_ide.post('/createmd', function(req, res){
	var name = req.body.name;

	fs.writeFile(__dirname + '/md2/' + name + '.md', req.body.content, function(err){
		if(err) return res.redirect('/');
		res.redirect('/ide/view/' + name);
		
	});
});
//################# END BS VERSION



route_namespace="ide";
  var setfiles=[{"name":"mddoc1","uri":"md1","id":"fooid"},
            {"name":"mddoc2","uri":"md2","id":"barid"},
            {"name":"mddoc3","uri":"md3","id":"rooid"}];
/* GET test listing. */

var pagelist=[ {"name":"blog","uri":"blog"},{"name":"poet blog","uri":"poet"},{"name":"page2","uri":"#"} ]




// app_ide.get('/', function(req, res) {
//     res.render('index',{root:app_root});
// });
// app_ide.get('/editor', function(req, res) {
// 		fs.readdir(__dirname + '/md', function(err, files){
// 		if(err) files = [];
// 		files = files.filter(function(f){ return f.match(/\.md$/i); })
// 			.map(function(f) { return f.replace(/\.md$/i, ''); });
// 			console.log(files);
// 		res.render('index_edit', {root:app_root, pageTitle: 'Home', files: setfiles });
// 	});
// });
// app_ide.get('/sublime', function(req, res) {
// 			fs.readdir(__dirname + '/md', function(err, files){
// 		if(err) files = [];
// 		files = files.filter(function(f){ return f.match(/\.md$/i); })
// 			.map(function(f) { return f.replace(/\.md$/i, ''); });
// 			console.log(files);
// 	 res.render('ide', {root:app_root, files: files,rt_ns:route_namespace,'template':'list',"items":files });
// 	});
   
//   // res.render('root user route');
// });




app_ide.get('/redo', function(req, res) {
	fs.readdir(__dirname + '/md', function(err, files){
				if(err) files = [];
		files = files.filter(isValidFile)
		     .filter(function(f){ return f.match(/\.md$/i); })
			.map(function(f) { return f.replace(/\.md$/i, ''); });

	function isValidFile (child) {
  		return (child !== '.DS_store' && child.indexOf('.') !== 0);
	}

 res.render('editor', {root:app_root, pageTitle: 'ide', files: files });
		});
});


app_ide.get('/redo/:id', function(req, res) {
		var reqid = req.params.id;
  console.log('paratest route with id:'+reqid);
var file = __dirname + '/md/'+reqid+'.md';
function md_parse(parsedMd){
  var docContent = mde.content(parsedMd);
  var meta = JSON.parse('{'+mde.metadata(parsedMd)+'}');
//  console.log(marked(docContent));

// var objmeta='{'+meta+'}';
console.log(meta);
res.send(docContent);
}

fs.readFile(file, 'utf8', function (err, rawMd) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }


md_parse(rawMd.allReplace({'_pageURI_': '/ide/', '_imageURI_': '/ide/content/images/'}))
});

});


module.exports = app_ide;
