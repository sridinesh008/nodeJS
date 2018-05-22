
var client = require("mongodb");

dbUrl = "mongodb://localhost:27017/";

client.connect(dbUrl, function (err, db) {
    if (err) {
        console.log(err)
    }
    console.log("Data Base Created")
    var database = db.db("nodemongo")
    database.createCollection("tutorial", function (err, res) {
        if (err) {
            console.log(err)
        }

        console.log("Collection created");
        db.close()
    })
})
