/**
 * lib/zrsimple.js
 */


var path = require('path');
var _ = require('lodash');
var shortId = require('shortid');
var fs = require('fs');
 
 var	dbpath=path.resolve(__dirname, 'dbs/');
var Datastore = require('nedb')
  , db = new Datastore({ filename: path.join(dbpath, 'fabio.db'), autoload: true });


var tables=
	[
		{"name":"suppliers","id":"ZJmpakzKK","parent":"ZyBklkMKY",
		"index_fields":{"id_product_items":["id_product","id_item"]}
		},
		{"name":"items","id":"ZyBklkMKY","parent":"root",
		"index_fields":{"id_product_suppliers":["id_product","id_supplier"]}
		},
		{"name":"products","id":"WJzPsXzKF","parent":"ZyBklkMKY",
		"index_fields":{"id_supplier_items":["id_supplier","id_item"]}
		}
	];


/*############*/
function findById(source,qparam, query) {
  for (var i = 0; i < source.length; i++) {
    if (source[i][qparam] === query) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

/*############*/

function insertdoc(doc){
db.insert(doc, function (err, newDoc) {   // Callback is optional
 console.log("newdoc inserted:" + JSON.stringify(newDoc));
});
}
exports.insertdoc = function(doc){
insertdoc(doc);
};

exports.findrecID = function(recid,callback){

db.findOne({ _id: recid }, function (err, doc) {
 		callback(doc);
});

};
exports.insertintable = function(tablename,insertdata,callback){
	var insert_table=findById(tables,'name',tablename).id;
	insertdata.id_table=insert_table;
//	console.log(insert_table);
//	console.log(insertdata);

	db.insert(insertdata, function (err, newDoc) {   // Callback is optional
 callback(JSON.stringify(newDoc));
});
};



exports.listall = function(callback){
db.find({}, function (err, docs) {
	callback(docs);
});
};

exports.listtable = function(tablename,callback){

	 // console.log(findById(tables,'name',tablename).id);
db.find({ id_table:findById(tables,'name',tablename).id }, function (err, docs) {
	console.log("listing table:"+tablename);
callback(docs);
});
};


exports.deletedoc = function(docid,callback){
	db.remove({ _id: docid }, {}, function (err, numRemoved) {
	 console.log(numRemoved + " record removed with id: "+docid);
	 callback({"remFLAG": numRemoved ,"remID":docid});
	});
};









