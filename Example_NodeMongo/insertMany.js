
var client = require("mongodb");

dbUrl = "mongodb://localhost:27017/";

client.connect(dbUrl, function (err, db) {
    if (err) {
        console.log(err)
    }
    console.log("Data Base Created")

    var database = db.db("nodemongo")

    var JsonObj= [
        {"gender":"male","name":"dinesh Kumar ","location":"chennai ckc"},
        {"gender":"female","name":"kumar","location":"salem"},
        {"gender":"male","name":"murali","location":"mumbai"},
        {"gender":"female","name":"prafful","location":"delhi"}
    ]

        database.collection("tutorial").insertMany(JsonObj,function(err,res){
            if(err){
                console.log(err)
            }

        })
        console.log("Collection created");
        db.close()

    })

