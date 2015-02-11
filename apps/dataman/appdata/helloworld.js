/**
 * lib/helloWorld.js
 */
 
exports.say = function() {
   return "hello world!";
};
exports.forms =function(){
  return({
testform1:{
  "header":{
    "name":"testform",
    "description":"a testform to use as proof of concept",
    "class":"validate-form",    
    "method":"post",
    "action":"/dataman",
    "script":"form1",
    "submitlabel":"send"
  },
  "inputs" : [
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "name" : "test text 1",
        "placeholder" : "test input 1",
        "required":""
      }
    },
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "name" : "test text 2",
        "placeholder" : "test input 2",
        "required":""
      }
    }
  ]
},
addUser_form:{
  "header":{
    "name":"adduser",
    "description":"form to add a new user",
    "class":"validate-form",
    "method":"post",
    "action":"/dataman/users",
    "submitlabel":"add new user"
  },
  "inputs" : [
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"id1",
        "name" : "fname",
        "placeholder" : "first name",
        "required":""
      }
    },
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"id1",
        "name" : "lname",
        "placeholder" : "last name",
        "required":""        
      }
      }
  ]
}

  });
};
exports.appdata=function(){
	return({
fields:[
{
  "name":"thumbimg",
  "edittype":"image_resize",
  "label":"image thumb",
  "editable_class":"edit_imgresize",
  "col_class":"imagecolumn",
  "vschema":1
},
{
  "name":"name",
  "edittype":"text",
  "label":"item name",
   "editable_class":"editable",
    "col_class":"namecolumn",
  "vschema":1
},
{
  "name":"vschema",
     "editable_class":"edit_disabled",
  "edittype":"disabled",
  "label":"schema version",
  "col_class":"shortidcol",
  "vschema":1
},
{
  "name":"imgstat_gal",
     "editable_class":"edit_imgupload",
  "edittype":"disabled",
  "label":"gallery image status",
    "col_class":"bool1col",
  "vschema":1
},
{
  "name":"imgstat_hd",
     "editable_class":"disabled",
  "edittype":"disabled",
  "label":"HD image status",
    "col_class":"bool1col",
  "vschema":1
}

],
records:  [
{ id: '712WbAnt3Q',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_712WbAnt3Q.jpg' },
  { id: '7JfZ02Yhm',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_7JfZ02Yhm.jpg' },
  { id: '7kBEWC2YnX',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_7kBEWC2YnX.jpg' },
  { id: '7k_VbR3K2m',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_7k_VbR3K2m.jpg' },
  { id: '7kuSWRnF2X',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_7kuSWRnF2X.jpg' },
  { id: '7yTV-0nK37',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_7yTV-0nK37.jpg' },
  { id: 'Q1ArWC2tnm',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_Q1ArWC2tnm.jpg' },
  { id: 'Qk0G-C3tnQ',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_Qk0G-C3tnQ.jpg' },
  { id: 'Qk4W0hKhm',
    vschema: 1,
    thumbimg: 'THUMB_zz1c_RAW_Qk4W0hKhm.jpg' }
    ]
  });
};