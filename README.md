# jumpcloud-node
A [JumpCloud REST API](https://github.com/TheJumpCloud/JumpCloudAPI) client.

## About
This project is still in its very earliest stages. However the goal is to provide a useable nodeJS helper to operate against the [JumpCloud](https://jumpcloud.com/) API for administration. Note there is a separate [Authentication and Authorization API](http://support.jumpcloud.com/knowledgebase/articles/455570) which is not covered by this repo.

## Install
```bash
$ npm install jumpcloud-node
```

## Quickstart

Grab an API token from the [admin console](https://console.jumpcloud.com/#/) (your username in the top right > API settings).

```js
var JumpCloud = require('jumpcloud');
var jc = new JumpCloud("XXXapikeyXXX");

jc.getAllUsers(function(x){
  for(a=0;a<x.results.length;a++){
    console.log("Username/ID: " + x.results[a].username + " / " +  x.results[a]._id);
  }
});
````

## Examples
Coming soon

## Contributors
Originally authored by [@ShakataGaNai](https://github.com/shakataganai)

## License
See [LICENSE](LICENSE) file.