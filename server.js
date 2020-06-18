var http=require('http') // 1 - Import Node.js core module
var server=http.createServer((function(request,response)   // 2 - creating server
{ 
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));
server.listen(5000);//3 - listen for any incoming requests
console.log('Node.js web server at port 5000 is running..')