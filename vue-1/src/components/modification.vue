<template>
  
    <div class="modification">  
        <!-- 头部 -->
         <div class="navigationBar">
            <i class="iconfont" @click="back">&#xe666;</i>
            <h1 class="title">{{this.$store.state.title}}</h1> 
        </div> 
        <!-- 内容 -->
        <ul class="modification-list">
            <li><i class="iconfont">&#xe65c;</i><a href="#">昵称</a>
            <input placeholder="你的昵称" type="input">
            </li>
           <li><i class="iconfont">&#xe8aa;</i><a href="#">E-mail</a> <input placeholder="请填写你的安全邮箱" type="input"></li>
           <li class=""><i class="iconfont">&#xe604;</i><a href="#">性别</a> 
             <!-- <form action="" name="myForm">
        <label>男</label>
        <input type="radio" value="男" v-model="checkInfo">
        <label>女</label>
        <input type="radio" value="女" v-model="checkInfo">
        <label>保密</label>
        <input type="radio" value="保密" v-model="checkInfo">

    </form> -->
           </li>
           <li><i class="iconfont">&#xe602;</i><a href="#">生日</a> <input placeholder="" type="input"></li>
           <li><i class="iconfont">&#xe886;</i><a href="#">身份证号</a> <input placeholder="请输入您的18位身份证号" type="input"></li>
           <li><i class="iconfont">&#xe6ed;</i><a href="#">个人描述</a> <input placeholder="请谈谈你对自己认识" type="input"></li>
        </ul>

        <button type="button" class="Logout">确认修改</button>
    </div>
</template>

<script>
export default {
name:"modification",
data(){
    return{
        checkInfo:""
    }
},

    methods:{ back:function(){
             history.back();

       },
    }
}
</script>

<style scoped>
.iconfont{
    left: 0;
    position: absolute;
    font-size: 23px;
}
/* /内容 */
.modification-list{
    width: 100%;
    height: auto;
}
.modification-list li{
    width: 100%;
    height: 55px;
    text-align: left;
    border-bottom: 1px solid gray;
    line-height: 55px;
}
.modification-list li:nth-of-type(6){
    height:150px;
}
.modification-list li:nth-of-type(6) input{
    height:150px;
    position: absolute;
    vertical-align: top;
}
.modification-list li a{
    text-decoration: none;
    font-size: 20px;
    color: gray;
    padding-left: 10px;
    width: 20%;
    display: inline-block;
}
 .modification-list .iconfont{
    font-size: 20px;
    color: rgb(138, 226, 164);
    position: relative;
    padding-left: 10px;
}
.modification-list input{
    border: none;
    font-size: 20px;
    width: 69%;
    height: 40px;
    color: rgb(180, 178, 178);
}
form input{
    width: 10px;
    height: 10px;
    display: inline-block;
}
.Logout{
    width: 90%;
    height: 55px;
    background: rgb(73, 182, 52);
    margin-top:30px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
}
</style>
