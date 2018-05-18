    const file = require('fs');
    var http=require('http');

    var counter=1;
    var server= http.createServer(fileServer).listen(6565);

    function fileServer(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("working with file fs module ");


        file.readFile('india.html', function(err,data){
            if(err){
                console.log("Error reading file"+err);
            }
            res.write("<br>");
            res.write(data);

            //writing to the file

            file.writeFile("bharat.html", data,function (err){
                console.log(err+counter);
                counter++;
            })
            res.end();
        })

        
    }

 
