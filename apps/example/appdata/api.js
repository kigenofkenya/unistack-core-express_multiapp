var express = require('express');
var router = express.Router();
var busboy = require('connect-busboy');
var Api = require(__dirname+'/ormAPI.js').ApiClass;
var api = new Api();
var rUID= "exampleAPI";
/* GET test listing. */
router.get('/', function(req, res) {
  res.send('root api route');
});


var tableIndex={

   "ZJmpakzKK":{"name":"suppliers","child":"ZyBklkMKY",
    "index_fields":{"id_product_items":["id_product","id_item"]}
    },
    "ZyBklkMKY":{"name":"items","parents":["ZJmpakzKK","ZyBklkMKY"],
    "index_fields":{"id_product_suppliers":["id_product","id_supplier"]}
    },
    "WJzPsXzKF":{"name":"products","child":"ZyBklkMKY",
    "index_fields":{"id_supplier_items":["id_supplier","id_item"]}
    }
  };


var typeTable={
  "ZJmpakzKK":"type1",
  "WJzPsXzKF":"type2",
  "ZyBklkMKY":"type3"

};

function renderType(res,partialtype,indexdata,recdata){

   res.render('partials/'+partialtype, {layout: false,tmpllogic:indexdata, tmpldata: recdata});
}
function parseType(res,typeid,recdata){

  renderType(res,typeTable[typeid],tableIndex[typeid],recdata);
}

function idqt(req,res){
       api.findOne(req.query.qt,function(retdata){
         console.log("partial type:"+ typeTable[req.params.id]);
    parseType(res,req.params.id,retdata);
             // res.render('partials/nakedlist', {layout: false, tmpldata: retdata});
    // console.log("data ontable:" +reqid+" send.");
  })

}
router.get('/', function(req, res) {
  //'middleware root no id param' means root point.
  res.send('fabio API root point');
});

// a middleware mounted on /user/:id; will be executed for any type of HTTP request to /user/:id
router.use('/:id', function (req, res, next) {
        if (!req.query.qt) {
 console.log("idparam&!qparam | fetching table");
   next();
  } else {

  console.log("idparam :" +req.params.id+ " && query made"+ req.query.qt + "it means, fetch from within table");
  idqt(req,res);
   }
  // console.log('Request Type:', req.method);
});
  // GET users/mwtest/testid?qt=queryid
// a route and its handler function (middleware system) which handles GET requests to /user/:id
router.get('/:id', function (req, res, next) {
  var reqid = req.params.id;
  if(reqid =="overview"){
    res.send({"msg":"alt","data":"overview_data"})
  }else{
      api.listtable(reqid,function(retdata){
    console.log(retdata.length);
             res.render('partials/nakedlist', {layout: false, tmpldata: retdata});
    console.log("data ontable:" +reqid+" send.");
  })
  }
  //look up data and then send {"msg":{"sucess":true},"data":[]}
});

/* POST API . */
router.post('/post/form1', function(req, res) {
  var reqmodel=req.body;
  var newSupplier={
    "date_created": new Date().toISOString(),
    "name":reqmodel.name_company,
    "developer_note": reqmodel.dev_note
  };
   api.insertintable("suppliers",newSupplier,function(dataobj){
        res.json({"retmsg":"success","retdata":dataobj})
   })
  console.log("basic form posted:"+ JSON.stringify(newSupplier));
});

router.post('/post/form2', function(req, res) {
  var reqmodel=req.body;
  var newProduct={
    "date_created": new Date().toISOString(),
    "name":reqmodel.name_product,
    "developer_note": reqmodel.dev_note
  };
   api.insertintable("products",newProduct,function(dataobj){
        res.json({"retmsg":"success","retdata":dataobj})
   })
  console.log("new product created:"+ JSON.stringify(newProduct));
});

router.post('/post/form3', function(req, res) {
  var reqmodel=req.body;
  var newItem={
    "date_created": new Date().toISOString(),
    "name":reqmodel.name_item,
    "developer_note": reqmodel.dev_note
  };
   api.insertintable("items",newItem,function(dataobj){
        res.json({"retmsg":"success","retdata":dataobj})
   })
  console.log("new product created:"+ JSON.stringify(newItem));
});

router.put('/put', function (req, res) {
  res.send('PUT request to API:'+rUID);
});


// var newUser={
//     "firstname":reqmodel.fname,
//     "lastname": reqmodel.lname,
//     "date_Created":new Date()
//   };

//   console.log(newUser);
  
// // res.send("success");

//   // // console.log(JSON.stringify(usermodel));
//  //  // var user = req.body;
//   // db.users.insert(newUser, function (err, result) {
//   //   if (err) {
//   //     res.send({'error':'An error has occurred'});
//   //   } else {
//   //    res.send('Success: ' + JSON.stringify(result));
//   //    console.log("new record added");
//   //     // res.send(result);
//   //   }
//   // });

// });

module.exports = router;