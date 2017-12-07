var JumpCloud = require('../lib/jumpcloud');
var apikey = process.env.JCAPIKEY;
var jc = new JumpCloud(apikey);

jc.getAllUserGroups(function(x){
    console.log(x);
    x.map(function(y) {
        jc.getGroup(y.id, function(z){
            console.log(z.name);
        });
    });
});

/***********/
jc.getAllUsers(function(x){
    for(a=0;a<x.results.length;a++){
      console.log("Username/ID: " + x.results[a].username + " / " +  x.results[a]._id);
      jc.getUserGroupMembership(x.results[a]._id, function(memberships){
          memberships.map(function(membership){
            console.log("Memberof: " + membership);
          });
      });
    }
  });

// var json = {"name": 'All Staff1',
//     "groupName": 'randomname2',
//     "groupGid": '1236',
//     "sendToLDAP": true };
// jc.addTag(json,function(x){
//   jc.updateTag(x._id,{"name":"Updated Name"},function(y){
//     jc.getTag(y._id,function(z){
//       jc.deleteTag(z._id,function(zztop){
//         console.log(zztop);
//       });
//     });
//   });
// });
