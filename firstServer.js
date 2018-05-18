var httpVariable= require('http');

var myserver=httpVariable.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("hello from node server again");
    response.end();
})

myserver.listen(6565)