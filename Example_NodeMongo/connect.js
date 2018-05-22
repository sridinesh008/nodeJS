
var client = require("mongodb");

dbUrl = "mongodb://localhost:27017/nodemongo";

client.connect( dbUrl,function(err,db){
    if(err){
        console.log(err)
    }
    console.log("Data Base Created")
    db.close();
}


)
