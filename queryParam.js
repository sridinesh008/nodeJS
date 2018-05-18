var http = require('http');
var url = require('url');



var server = http.createServer(queryParamServer).listen(6565)

function queryParamServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("working with http & url ");
    var myQuery =  url.parse(req.url,true).query;
    var queryText1 = myQuery.name1;
    var queryText2 = myQuery.location;
    res.write("<br>");
    res.write(queryText1+" "+queryText2);
  
}