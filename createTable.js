var mysqlDb=require('mysql');

var connection = mysqlDb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fromnode'
})

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected to the databse");
        var sql ="create table friends (name  varchar(32),id int(8),location varchar(32))";
        connection.query(sql),function(err,suc){
                if(err){
                    console.log(err);
                }else{
                    console.log("Table create ....");
                }
        }
    }
});