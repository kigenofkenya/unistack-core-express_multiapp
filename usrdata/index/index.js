module.exports = {
 routetree: [   
    {
      "name" : "core assets",
      "permissions":"public",
    "uri" : "",
    "children":[
    {"name" : "riot todo list","uri" : "todos"},
    {"name" : "tagging system","uri" : "blogtag"}
    ]
  }, {
      "name" : "documentation system",
    "permissions":"public",
    "uri" : "docs"
  },
    {
    "name" : "ide",
        "permissions":"restricted",
    "uri" : "ide",

        "children":[
    {"name" : "bootsrapversion","uri" : "mdboot","children":[
    {"name" : "boot1","uri" : "mdboot1"},
    {"name" : "boot2","uri" : "mdboot2"}
    ]},
    {"name" : "basic version","uri" : "mdbasic"}
    ]
  },
  {
      "name" : "database cluster",
    "permissions":"admin",
    "uri" : "dbcluster"
  },
  {
    "name" : "data management suite",
    "permissions":"admin",
    "uri" : "dataman",
    "children":[
    {"name" : "table1","uri" : "table1"},
    {"name" : "tagging system","uri" : "blogtag"}
    ]
  },
    {
      "name" : "blog",
      "permissions":"restricted",
    "uri" : "blog"
  }
]


};
