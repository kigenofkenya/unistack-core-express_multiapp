module.exports = {
    server:{
  host: "localhost",
      port: 31321

  },
apps:[
{'example':null},
{'blog':'restrictUser'},
{'dataman':'restrictUser'},
{'dbcluster':'restrictUser'},
{'ide':'restrictAdmin'},
{'admin':'restrictAdmin'}
],


testdata1:{
  '#title': 'Page 1-testdata',
  '#butt_pagedata1':{
        'title': 'button1',
    'textContent': 'view 1'
  },
  '#butt_pagedata2':{
        'title': 'button2',
    'textContent': 'view 2'
  },
  '#stage': {
    'childNodes': [
      {'input': {
          'type': 'text',
          'name': 'name',
          'id': 'name'
        }
      },
       { 'ul': {
    'children': [
      {'li': ['first', 'second']}
    ]
  }
}
    ]
  }
},

testdata2:{
  '#title': 'Page 1-testdata2',
  '#butt_test1':{
        'title': 'button1',
    'textContent': 'test 1'
  },
  '#butt_test2':{
        'title': 'button2',
    'textContent': 'test 2'
  },
  '#stage': {
    'childNodes': [
      {'input': {
          'type': 'text',
          'name': 'name',
          'id': 'name'
        }
      }
    ]
  }

},
addUser_form:{
  "header":{
    "name":"adduser",
    "description":"form to add a new user",
    "class":"validate-form",
    "method":"post",
    "action":"/sys/users",
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
},
table_id1:{
    fields:[
    {date: "Wed"}, 
    {activity: "url"}, 
    {comment: "three"}, 
    {name: "three"}
    ],
    records: [
  {
    date: '2011-08-23',
    activity: 'Jogging',
    comment: 'Early morning run',
    name: 'Harry Potter'
  }, {
    date: '2011-09-04',
    activity: 'Gym',
    comment: 'Chest workout',
    name: 'Batman'
  }
]
},
table_id2:{
    fields:[
    {date: "Wed"}, 
    {activity: "url"}, 
    {comment: "three"}, 
    {name: "three"}
    ],
    records: [
  {
    date: 'table2',
    activity: 'table2',
    comment: 'Early morning run',
    name: 'Harry Potter'
  }, {
    date: '2011-09-04',
    activity: 'Gym',
    comment: 'Chest workout',
    name: 'Batman'
  }
]
}


};
