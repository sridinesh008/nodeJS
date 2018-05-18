var httpVariable= require('http');
var currentDate=require('./dateLibraray')

var myserver=httpVariable.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("hello from node server again");
    response.write("<br>");
    var cd =  currentDate.myDate();
    response.write(cd);
    response.end();
})

myserver.listen(6565)