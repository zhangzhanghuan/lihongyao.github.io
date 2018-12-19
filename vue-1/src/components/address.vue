<template>
    <div class="address">
          <!-- 头部 -->
         <div class="navigationBar">
            <i class="iconfont" @click="back">&#xe666;</i>
            <h1 class="title">{{this.$store.state.title}}</h1> 
        </div> 
        <!-- 内容 -->
        <ul class="address-list">
            <li><i class="iconfont">&#xe65c;</i><a href="#">姓名</a>
            <input placeholder="请填写你的真实姓名" type="input">
            </li>
           <li><i class="iconfont">&#xe8aa;</i><a href="#">联系电话</a> <input placeholder="请填写我们联系你的号码" type="input"></li>
           <li><i class="iconfont">&#xe8aa;</i><a href="#">邮政编码</a> <input placeholder="请填写您所在地区的邮政编码" type="input"></li>
           <li>
               <el-select v-model="value" placeholder="请选择" class="selected-1">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="请选择" class="selected-1">
                    <el-option
                    v-for="item in optionss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="请选择" class="selected-1">
                    <el-option
                    v-for="item in optionsss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
           </li>
            
           <li><i class="iconfont">&#xe6ed;</i><a href="#">详细地址</a> <input placeholder="请填写详细的街道、楼栋、门牌号" type="input"></li>
        </ul>

        <button type="button" class="Logout">确认地址</button>
    </div>
</template>

<script>
export default {
    name:"address",
    data(){
        return{
             options: [{
          value: '选项1',
          label: '四川省'
        }, {
          value: '选项2',
          label: '广东省'
        }, {
          value: '选项3',
          label: '贵州省'
        }, {
          value: '选项4',
          label: '广西省'
        }, {
          value: '选项5',
          label: '云南省'
        }],
        value: '',
         optionss: [{
          value: '选项1',
          label: '绵阳市'
        }, {
          value: '选项2',
          label: '深圳市'
        }, {
          value: '选项3',
          label: '贵阳市'
        }, {
          value: '选项4',
          label: '桂林市'
        }, {
          value: '选项5',
          label: '昆明'
        }],
         optionsss: [{
          value: '选项1',
          label: '盐亭县'
        }, {
          value: '选项2',
          label: '新桥'
        }, {
          value: '选项3',
          label: '黄果树瀑布'
        }, {
          value: '选项4',
          label: '大树'
        }, {
          value: '选项5',
          label: '香格里拉'
        }],
      
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
.address-list{
    width: 100%;
    height: auto;
}
.address-list li{
    width: 100%;
    height: 55px;
    text-align: left;
    border-bottom: 1px solid gray;
    line-height: 55px;
    margin-top:10px;
}
.address-list li:nth-of-type(6){
    height:150px;
}
.address-list li:nth-of-type(6) input{
    height:150px;
    position: absolute;
    vertical-align: top;
}
.address-list li a{
    text-decoration: none;
    font-size: 18px;
    color: rgb(163, 160, 160);
    padding-left: 10px;
    width: 20%;
    display: inline-block;
}
 .address-list .iconfont{
    font-size: 20px;
    color: rgb(138, 226, 164);
    position: relative;
    padding-left: 10px;
}
.address-list input{
    border: none;
    font-size: 18px;
    width: 69%;
    height: 40px;
    color: rgb(0, 0, 0);
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
.selected-1{
    width: 32%;
    color: black;
}
</style>
