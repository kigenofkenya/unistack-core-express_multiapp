

var dbORM= require("./fabiosimple.js");


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

//1. CREATE
//	insertdoc(doc)
//	 insertintable(table,doc)
//2. READ
//	dbORM.listall();
// products/suppliers or items
	dbORM.listtable("suppliers",function(retdata){
		console.log(retdata);
	})
//	
	
//	dbORM.findrecID('UuafXz7IWyKh1J1Q',function(retdata){
//		console.log(retdata);
//	})	


//3. UPDATE

//4. DELETE
	
var tfields= [
    {name: "testname"}, 
    {type: "standardorspray"}, 
    {color: "listneeded"}
    ];
