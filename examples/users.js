var JumpCloud = require('../lib/jumpcloud.js');
var apikey = process.env.JCAPIKEY;
var jc = new JumpCloud(apikey);


/***********/
jc.getAllUsers(function(x){
  for(a=0;a<x.results.length;a++){
    console.log("Username/ID: " + x.results[a].username + " / " +  x.results[a]._id);
  }
});

/***********/
//var filter =  [{"email" : { "$regex" : "trueaccord.com$"}}];
var filter =  [{"username" : "fuser"}];
jc.searchUsers(filter,function(x){
  for(a=0;a<x.results.length;a++){
    console.log("Username/ID: " + x.results[a].username + " / " +  x.results[a]._id);
  }
});

/***********/
jc.getUser('XXXuseridXXX',function(x){
  console.log("User is: " + x.firstname + " " + x.lastname);
});

/***********/
jc.deleteUser('XXXuseridXXX',function(x){
  console.log(x);
});


/***********/
json = {
  "email" : "fuser@testdomain.com",
  "username" : "fuser",
  "password": "flimflam1",
  "firstname": "Fake",
  "lastname": "User",
  "tags" : ["All Employee"]
};

jc.addUser(json,function(x){
  console.log(x);
});
