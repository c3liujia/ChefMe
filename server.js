var express = require('express');
var app = express();

app.use(express.static('src'));

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
	console.log("listening on "+PORT)
});

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    return next();
});