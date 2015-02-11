var express = require('express');
var router = express.Router();

var routeindex={
"tables":{
	"table1":{"root":"table1",
    "label":"supplier",
    "description":"a test route to show all functions of the supplier part of the api"},
	"table2":{"root":"table2",
    "label":"product",
    "description":"a test route to show all functions of the product part of the api"},
	"table3":{"root":"table3",
    "label":"item",
    "description":"a test route to show all functions of the item part of the api"}       
}

};
var route1={
    "root":"table1",
    "label":"supplier",
    "description":"a test route to show all functions of the route1 part of the api",
    "valObj":{
        "name":"params",
        "author":"params",
        "category":"params",
        "isbn":"params"
    },
    "routemap":{
        "GETONE":{"resource":"rest","description":"test1"},
        "GETLIST":{"resource":"rest","description":"test1"},
        "POST":{"resource":"rest","description":"test1"},
        "PUT":{"resource":"rest","description":"test1"},
        "DELETE":{"resource":"rest","description":"test1"}
    }

};

var route2={
    "root":"table2",
    "label":"product",
    "description":"a test route to show all functions of the product part of the api",
    "valObj":{
        "name":"params",
        "author":"params",
        "category":"params",
        "isbn":"params"
    },
    "routemap":{
        "GETONE":{"resource":"rest","description":"test2"},
        "GETLIST":{"resource":"rest","description":"test2"},
        "POST":{"resource":"rest","description":"test2"},
        "PUT":{"resource":"rest","description":"test2"},
        "DELETE":{"resource":"rest","description":"test2"}
    }

};
var route3={
    "root":"table3",
    "label":"item",
    "description":"a test route to show all functions of the item part of the api",
    "valObj":{
        "name":"params",
        "author":"params",
        "category":"params",
        "isbn":"params"
    },
    "routemap":{
        "GETONE":{"resource":"rest","description":"test3"},
        "GETLIST":{"resource":"rest","description":"test3"},
        "POST":{"resource":"rest","description":"test3"},
        "PUT":{"resource":"rest","description":"test3"},
        "DELETE":{"resource":"rest","description":"test3"}
    }

};
/* GET API basic  */
router.get('/', function(req, res) {
  res.send('API root');
});



var reqid1,reqid2,reqid3;
var fieldArray1,fieldArray3,fieldArray3;

router.get('/'+route1.root, function(req, res) {
  res.send(route1.description);
});
router.post('/'+route1.root,function(req, res) {
      fieldArray1=Object.keys(route1.valObj); 
        var tempObj={}; //temporary object store
  // array of fields for acceptable input to database
    for (i=0; i < fieldArray.length; i++) { 
        tempObj[fieldArray1[i]]=req.body[fieldArray1[i]];
        }//fill tempObj
    console.log(tempObj); //dummy post to db
    //check if unique fields violated
    //validate rest of fields
    // console.log(req.body);
   
    res.send('adding new'+ route1.label +' with  params: '+ JSON.stringify(tempObj));
 });



router.all('/'+route1.root+'/:id', function (req, res, next) {   
  // console.log('middleware to get reqparams...'+req.params.id)
  reqid1=req.params.id;
 fieldArray1=Object.keys(route1.valObj); 
  next() // pass control to the next handler
})

router.route('/'+route1.root+'/:id')
  .get(function (req, res) {

    res.send('get single book:'+reqid1);
  })

  .put(function(req, res) {
  	     //get id, 
        // console.log(req.body);
        // console.log(Object.keys(req.body));
         var tempObj={};
       
        for (i=0; i < fieldArray1.length; i++) { 
            if(fieldArray1[i] in req.body){
                // console.log("key present from fieldObject:"+fieldArray[i]);
            tempObj[fieldArray1[i]]=req.body[fieldArray1[i]];
            }else{
                // console.log("key not present in fieldObject:"+fieldArray[i]);
            }
        }
   console.log('put id:'+reqid1+ 'new params:' + JSON.stringify(tempObj));

    res.send('Update single record with id:'+reqid1+ 'with these updated fields' + JSON.stringify(tempObj));
    
  })
  .delete(function (req, res) {
  res.send('DELETE request to '+ route1.label +'route: ' +reqid1);
});

module.exports = router;
