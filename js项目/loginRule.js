
    //使用express构建服务器
    var express = require("express");//导入安装的express模块
    var getDBcon=require("./getDaTbcon");
    var bodypar=require('body-parser');
    var app = express();
    app.use(bodypar.urlencoded({entend:false}));
    app.use(bodypar.json());

    // 你要连接的数据库中的数据表
    var newcon ={
    host : 'localhost', //数据库地址
    user : 'root', //数据库用户名
    password : 'zh.1203', //数据库密码
    database : 'meishi' //数据库名
    }

    app.listen(8081,function() {
        console.log("应用实例，访问地址为 http://127.0.0.1:8081");
        });
    
        //设置跨域访问（设置在所有的请求前面即可）
    app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == 'OPTIONS')
    res.send(200); //让options尝试请求快速结束
    else
    next();
    });

    //正式构建后端接口
app.get("/", function (req, res) {
    res.send("你好，已经收到你的请求！");
})
        //查询所有数据
    app.get("/query",function(req,res){
    var connection=getDBcon(newcon);
    var sq1 = `SELECT * FROM user`;
    //像数据库查询
    connection.query(sq1 , resc1);
    function resc1(err,result){
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            res.send(err);
            return;
            }
            res.send(JSON.stringify(result));
            //打印查询结果
            
            connection.end(); //操作完成后记得加上这句关闭数据库链接

         } 
        });  

// 登录
app.post("/login", function (req, res) {
    var obj = req.body;//获取前端post传来的参数
    console.log(obj);
    //先验证数据库里面是否已经存在此用户，如果存在，就拒绝注册
    var sql1 = `select * from user where username="${obj.username}" and psw="${obj.psw}"`;
    var conObj = getDBcon(newcon); //获取数据库链接对象
    conObj.query(sql1, function (error, result) {
        if (error) {
            res.send("sql执行出错" + error.message);
        }
        else {
            //登录成功
            if (result.length > 0) {
                res.send("1");
            }
            //登录失败
            else {
                res.send("0");
            }
        }
        conObj.end();//关闭数据库链接
    })


})


    // 注册
    app.post("/registry",function(req,res){
        var obj = req.body;//获取前端post传来的参数
        console.log(obj);
        var resobj={};
        //先验证数据库里面是否已经存在此用户，如果存在，就拒绝注册
        var sql1 = `select * from user where username="${obj.username}"`;
        var conObj = getDBcon(newcon); //获取数据库链接对象
        conObj.query(sql1, function (error, result) {
            if (error) {
                resobj.state=false;
                resobj.mes=error.message
                res.send(JSON.stringify(resobj));
            }
            else {
                //说明存在数据
                if (result.length > 0) {
                    resobj.state=false;
                    resobj.mes="此用户已存在，不允许重复注册";
                    res.send(JSON.stringify(resobj));
                }
                //说明不存在，可以注册
                else {
                    //构建注册的sql语句
                    var sql = `insert into user values("${obj.username}","${obj.psw}","${obj.email}",${obj.tel})`;
                    conObj.query(sql,function(e,r){ //e:错误，r正确
                        if(e){
                            resobj.state=false;
                            resobj.mes=error.message
                            res.send(JSON.stringify(resobj));
                        }
                        else {
                            resobj.state=true;
                            resobj.mes="注册成功";
                            res.send(JSON.stringify(resobj));
                        }
                    });
                }
            }
            conObj.end();//关闭数据库链接
        })   
})
