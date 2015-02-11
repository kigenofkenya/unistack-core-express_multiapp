
var apiroot="/dbcluster/api/";

module.exports = {
testform1:{
  "header":{
    "name":"testform1",
    "description":"form to add a new supplier",
    "class":"validate-form",
    "method":"post",
    "action":apiroot+"post/form1",
    "submitlabel":"add new supplier"
  },
  "inputs" : [
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"formid1",
        "name" : "name_company",
        "placeholder" : "company name",
        "required":""
      }
    },
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"formid2",
        "name" : "dev_note",
        "placeholder" : "developer note",
        "required":""        
      }
      }
  ]
},
testform2:{
  "header":{
    "name":"testform2",
    "description":"form to add a new product",
    "class":"validate-form",
    "method":"post",
    "action":apiroot+"post/form2",
    "submitlabel":"add new product"
  },
  "inputs" : [
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"formid3",
        "name" : "name_product",
        "placeholder" : "product name",
        "required":""
      }
    },
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"formid4",
        "name" : "dev_note",
        "placeholder" : "developer note",
        "required":""        
      }
      }
  ]
},
testform3:{
  "header":{
    "name":"testform3",
    "description":"form to add a new item",
    "class":"validate-form",
    "method":"post",
    "action":apiroot+"post/form3",
    "submitlabel":"add new item"
  },
  "inputs" : [
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"formid5",
        "name" : "name_item",
        "placeholder" : "name of item",
        "required":""
      }
    },
    {
      "header" : {
        "elemtype" : "input",
        "inputtype" : "text"
      },
      "body" : {
        "id":"formid6",
        "name" : "dev_note",
        "placeholder" : "developer note",
        "required":""        
      }
      }
  ]
}





};
