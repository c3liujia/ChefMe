var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
app.use(express.static('src'));

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
	console.log("listening on "+PORT)
});

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    return next();
});

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});


//***Below used to test mongo***
// var insertDocument = function(db, callback) {
//    db.collection('test').insertOne( {
//    	"test" : "Hello world"
//    }, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the restaurants collection.");
//     callback();
//   });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   insertDocument(db, function() {
//       db.close();
//   });
// });