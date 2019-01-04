var express = require('express');
var app = express();
var mysql = require('mysql');


//设置跨域访问 
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8"); 
    next();
});


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Zjtapp1234',
    database : 'testCat'
});

connection.connect();
connection.query('select * from skin', function (error, results) {
    if (error) throw error;
    app.get('/',function (req, res) {
        res.send(results);
    })
});

app.listen('5000', function () {
    console.log('启动服务 http://localhost:5000');
});


