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
        var sql ="insert into friends (id,name,location)  values(1,'dinesh','chennai')";
        connection.query(sql,function(err,suc){
                if(err){
                    console.log(err);
                }else{
                    console.log("one row created ....");
                }
        })
    }
});