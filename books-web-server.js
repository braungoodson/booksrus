//
var responses = {};
responses.plainText = function () {
	return {'Content-Type':'text/plain'};
};
responses.html = function () {
	return {'Content-Type':'text/html'};
};
responses.json = function () {
	return {'Content-Type':'application/json'};
};
responses.javascript = function () {
	return {'Content-Type':'text/javascript'};
};

//
var callbacks = {};
callbacks.basic = function () {
	return function (req,res) {
        	res.writeHead(200,new responses.plainText());
        	res.end("Goodbye!\n");
	};
};

//
var fileSystem = require('fs');

//
callbacks.booksRUsRouter = function () {
	return function (req,res) {
		switch (req.url) {
			case '/' :
				res.writeHead(200,new responses.html());
				fileSystem.readFile('./index.html',function (err,data) {
					res.end(data);
				});
				break;
			case '/getBooks' :
				res.writeHead(200,new responses.json());
				var books = { "BookList" : [
					{"title":"The Server-Side Of The Force","author":"Darth Braun"},
					{"title":"Idioms for Idiots","author":"Garfunkle Knuckler"}
				]};
				res.end(JSON.stringify(books));
				break;
			case '/jquery.min.js' :
                                res.writeHead(200,new responses.javascript());
                                fileSystem.readFile('./jquery.min.js',function (err,data) {
                                        res.end(data);
                                });
                                break;
			case '/underscore-min.js' :
                                res.writeHead(200,new responses.javascript());
                                fileSystem.readFile('./underscore-min.js',function (err,data) {
                                        res.end(data);
                                });
                                break;
			case '/backbone-min.js' : 
                                res.writeHead(200,new responses.javascript());
                                fileSystem.readFile('./backbone-min.js',function (err,data) {
                                        res.end(data);
                                });
                                break;
			case '/booksrus.js' :
                                res.writeHead(200,new responses.javascript());
                                fileSystem.readFile('./booksrus.js',function (err,data) {
                                        res.end(data);
                                });
                                break;
			default :
				res.end("Could not route."); 
				break;
		};
	};
};

//
var http = require('http');
var s = http.createServer(new callbacks.booksRUsRouter());
s.listen(8000);

//
console.log("Server running!");
