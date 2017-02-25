var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
var axios = require('axios');
var apiKey = require('./secrets').googleAPIKey;

server.get('/posts/:postID', function(request,response){
  var postID = request.params.postID;
  var url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
  axios.get(url)
       .then(function(results){
         response.send(results.data);
       })
       .catch(function(err){
         response.send(err);
       });
});

server.get('/location/:address', function(request, response){
  var address = request.params.address;
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  axios.get(url)
       .then(function(results){
         response.send(results.data);
       })
       .catch(function(err){
         response.send(err);
       });
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
