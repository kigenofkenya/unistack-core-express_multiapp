var express = require('express');
var path = require('path');
var _ = require('lodash');
var fs = require('fs');
var cuid = require('cuid');
var async = require('async');
var nedb = require('nedb');




var	dbpath=path.resolve(__dirname, '../../usrdata/databases/system/');
//var db = { users:  new nedb({ filename: path.join(dbpath, 'sys1.db'), autoload: true }) };
var db = { test1:  new nedb({ filename: path.join(dbpath, 'systest1.db'), autoload: true }) };
//
//  db.users.find({}, function(err, result) {
//    console.log(result);
//  });



function insertdoc(){
var doc = { 
				name: 'testrec4'
             , date_created: new Date()
             , vschema: 1
				, uid:cuid() 
               };



//db.test1.insert(doc, function (err, newDoc) { 
//	console.log("doc inserted with id:"+newDoc._id);
//});
}
  db.test1.find({}, function(err, result) {
    genout(result);
  });





function genout(reclist){
// using the "_.property" callback shorthand
var out = _.map(reclist,function(prop){
	return ({'id':prop.uid,'name':prop.name, 'vschema':1});
}
);
// → ['barney', 'fred']

console.log(JSON.stringify(out));
}

//var keyData = [
//  { 'dir': 'left', 'code': 97 },
//  { 'dir': 'right', 'code': 100 }
//];
//
//_.indexBy(keyData, 'dir');
//// → { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
//
//_.indexBy(keyData, function(object) { return String.fromCharCode(object.code); });
//// → { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
//
//_.indexBy(keyData, function(object) { return this.fromCharCode(object.code); }, String);
//// → { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
//
//

//
//// API : POST => User
//app_dataman.post('/users', function (req, res) {
//var reqmodel=req.body;
// // console.log("add user form posted:"+ JSON.stringify(req.body));
//	var newUser={
//		"firstname":reqmodel.fname,
//		"lastname": reqmodel.lname,
//		"date_Created":new Date()
//	};
//  db.users.insert(newUser, function (err, result) {
//    if (err) {
//      res.send({'error':'An error has occurred'});
//    } else {
//     res.send('Success: ' + JSON.stringify(result));
//     console.log("new record added");
//      // res.send(result);
//    }
//  });
//
//});
//
//// API : DELETE => User by ID
//app_dataman.delete('/users/:id', function (req, res) {
//  var id = req.params.id;
//  db.users.remove({_id: id}, {}, function (err, result) {
//    if (err) {
//      res.send({'error':'An error has occurred - ' + err});
//    } else {
//      console.log('' + result + ' user(s) deleted');
//      res.send(req.body);
//    }
//  });
//});

