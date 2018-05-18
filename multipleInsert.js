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
        var sql ="insert into friends (id,name,location)  values ?";
var records = [
    [2,'mohan','Trichy'],
    [3,'murali','salem'],
    [4,'nonmae','pune'],
    [5,'peru vekkal','ooru kedayathu'],
    [6,'peru vekkala thambi ','ooru kedayathu thambi']
]

        connection.query(sql,[records],function(err,suc){
                if(err){
                    console.log(err);
                }else{
                    console.log("one row created ....");
                }
        })
    }
});