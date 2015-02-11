var LiveRepo = require('./index.js').LiveRepo;
var liveRepo = new LiveRepo();



liveRepo.save({});
liveRepo.save({});
var dlist = liveRepo.findAll();

console.log(dlist)
