var mysqlDb=require('mysql');

var connection = mysqlDb.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected to the databse");
        connection.query("create database fromnode"  , function(err,suc){
            if(err){
                console.log(err);
            }else{
                console.log("Data Base Created")
            }
        })
    }
});