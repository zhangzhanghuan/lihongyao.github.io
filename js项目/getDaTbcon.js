var mysql=require('mysql');

//连接对象
var defalutObj={
    host : 'localhost', //数据库地址
    user : 'root', //数据库用户名
    password : 'zh.1203', //数据库密码
    database : 'zs' //数据库名
}

function getObj(obj=defalutObj){
    var connection = mysql.createConnection(obj);
    connection.connect(); //启动链接
    return connection;//把启动连接后的对象返回
}

// var test=getObj();
// console.log(test);

module.exports=getObj;