var connection = require("../main.js").connection;
var connection = require("../main.js").app;

// 监听端口，返回 bag 信息
app.listen('5000', function (Request) {
    let account = Request.get('account');
    let querySql = 'select * from skin where account=?';
    connection.query( querySql, account ,function (error, results) {
        if (error) throw error;
        app.get('/',function (req, res) {
            let read = Request.get('read');
            let o_wait = res.wait;
            if((res.old + o_wait) = read){
                let old = read;
                let wait = 0;
            }else if((res.old + o_wait) > read){
                let old = read;
                let wait = read - old;
            }
            res.send(results);
        })
    });
});