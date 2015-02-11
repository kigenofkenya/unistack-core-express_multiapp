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
  "name":"name",
  "edittype":"text",
  "label":"item name",
   "editable_class":"edit_disabled",
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
}

],
records:  [
{ id: '712WbAnt3Q',
    vschema: 1,
    name: "record 1"},
  { id: '7JfZ02Yhm',
    vschema: 1,
    name: "record 2" }
    ]
  });
};