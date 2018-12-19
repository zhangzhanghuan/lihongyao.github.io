<template>
    <div class="page buy">
        <!-- 头部 -->
         <div class="navigationBar">
            <!-- <i class="iconfont" @click="back">&#xe666;</i> -->
      <h1 class="title">{{this.$store.state.title}}</h1> 
       <span class="wid-price edit">编辑</span>
     
    </div> 
   
 
              <div v-for="(item, index) in this.rootArr" :key="index" class="buy-list check-box single-box">
                       <!-- 左侧选择框 --> 
                       <!-- <p class="no-item">你的购物车是空的</p> -->
                       <!-- 单选 -->
                        <section class="f1 check-box" >
                            <span class="check-item" v-bind:class="{'check':item.checked}" @click="selectedItem"></span>
                        </section>
                    <img v-bind:src="item.img" alt="">
                    <div class="buy-list-right">
                    <h6 class="bookname">{{item.name}}</h6>
                        
                        <p class="authorname">{{item.authorname}}</p>
                        
                        <p class="price">单价：￥{{item.price}}
                             
                        </p>
                        <p class="or-total">总价:￥{{item.num *item.price | money('元')}}</p>
                         <!-- 加减数量 -->
                        <div class="counter">
                            <span class="btn down" @click="changeMony(item,-1)">-</span>
                            <input class="input" type="text" v-model="item.num">
                            <span class="btn up" @click="changeMony(item,1)">+</span>
                        </div>
                    </div>
                </div>
               <div class="footer">
                    <!-- 全选 -->
                    <section class="check-box all-check ">
                        <span class="check-item" :class="{'check':checkAllflage}" @click="checkAll"></span>
                        <span class="check-tips">全选</span>
                    </section>
                      <!-- 合计 -->
                    <section class="total-price-box not-editing-item">
                        <span>合计：</span>
                        <span class="total-price ">{{totalprice}}</span>
                    </section>
                    <!-- 去结算 -->
                    <router-link to="/pay" class="settlement not-editing-item" tag="section" @click="goPay">去结算(0)</router-link>
                    <router-view/>
                    <!-- 删除 -->
                    <el-button class="delete-btn hidden" type="button" @click="deleteBtn">删除</el-button>
                    
               </div>

           </div> 
</template>

<script>
import Vue from 'vue'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
export default {
    components:{
        $,
    },
    name: 'buy',
    data() {
        return {
        datass:{},  
        count:"1", 
        num:"",
        checkAll:false,
        totalprice:0,
        rootArr:"",
        }
    },
    methods:{
        goPay:function () {
            
          },
          changeMony:function(item,way){
              if(way>0){
                  item.num++;
                  if(item.num>5){
                       this.$alert( '商品不可大于5件', {
                        confirmButtonText: '确定',
                        callback: action => {
                        },
       
                        })
                      item.num=5;
                  }
              }else{
                   item.num--;
                   if(item.num<1){
                       item.num=1;
                   }
              }
              this.calcTotalPrice();
          },
          selectedItem:function(item){
              if(typeof item.checked == "undefined"){
                  Vue.set(item,"checked",true);
                //   this.$set(item,"checked",true)
              }else{
                  item.checked=!item.checked
              }
              this.calcTotalPrice();
          },
          checkAll:function(flag){
              this.checkAllflag=flag;
              var _this=this;
              if(this.checkAllflag){
                  this.rootArr.forEach(function(item,index){
                     if(typeof item.checked == "undefined"){
                  _this.$set(item,"checked",_this.checkAllflag);
              }else{
                  item.checked=_this.checkAllflag;
              }
                  });
              }
              this.calcTotalPrice();
          },
          calcTotalPrice:function(){
              var _this=this;
              this.totalprice=0;
              let  data=this.rootArr;
              console.log(data);
              data.forEach(function(item,index){
                  if(item.checked=true){
                      console.log(item.checked);
                      _this.totalprice +=item.price*item.num;
                  }
              })
          }
        
    
    },
    mounted(){
        let selectedIndexs = []; // 记录选中下标
        let editSelectedIdnexs = []; // 记录编辑状态下选中下标
        let isEditing = false; // 记录编辑状态
        let datas=this.rootArr;
     // 2.处理选中
    $('.check-item').click(function() {
        // 获取check元素
        let $checkItem = $(this);
        // 切换check元素状态
        $checkItem.toggleClass('checked');
        // 在非编辑状态下，根据check元素是否选中赋值checked属性值
        if(!isEditing) {
            $checkItem.hasClass('checked') ? $checkItem.data('checked', true) : $checkItem.data('checked', false);
        }
        // 获取购物车数量长度
         let len = $(".check-box:not(.all-check) .check-item").length;
        // 判断是点击全选还是单独选
        if($(this).parent().hasClass('all-check')) { // 全选
            if($checkItem.hasClass('checked')) { // 选中
                // 更新下标
                for(let i = 0; i < len; i++) {
                    isEditing ? editSelectedIdnexs[i] = i : selectedIndexs[i] = i;
                }
                $(".check-box:not(.all-check)   .check-item").addClass('checked')
            }else { // 未选中
                // 如果全选按钮为选中，则根据编辑状态清空下标集合
                isEditing ? editSelectedIdnexs = [] : selectedIndexs = [];
                $(".check-box:not(.all-check)   .check-item").removeClass('checked');
            }
            if(!isEditing) {
                updateFoot();
                $(".check-box:not(.all-check) .check-item").data('checked', $checkItem.hasClass('checked'));
            }
        }else { // 单选
            // 获取下标
            let index = $checkItem.parents('.item').index();
            if($checkItem.hasClass('checked')) { // 选中
                // 加入选中下标
                isEditing ? editSelectedIdnexs.push(index) : selectedIndexs.push(index);
                // 如果单选按钮的长度和记录选中下标集合的长度一致，则让全选按钮呈现选中状态
                if(isEditing && len == editSelectedIdnexs.length) {
                    $('.all-check .check-item').addClass('checked')
                }else if(!isEditing && len == selectedIndexs.length) {
                    $('.all-check .check-item').addClass('checked')
                }
            }else { // 未选中
                // 删除选中下标
                isEditing ? editSelectedIdnexs.splice(editSelectedIdnexs.indexOf(index), 1) : selectedIndexs.splice(selectedIndexs.indexOf(index), 1)
                // 去除全选选中状态
                $('.all-check .check-item').removeClass('checked');
            } 
            !isEditing && updateFoot();
        }
    });
     // 3.处理编辑
     $('.edit').click(function() {
        // 更新编辑状态
        isEditing = !isEditing;
        // 更新标题
        $(this).text(isEditing ? "完成" : "编辑");
        // 根据编辑状态切换显示
        if(isEditing) {
             $('.not-editing-item').hide();
            $('.delete-btn').show();
            $('.delete-btn').removeClass('hidden');
            // $('.f1').hide();
            // $('.checked').hide();
        }else {
         
            $('.not-editing-item').show()
            $('.delete-btn').hide();
             $('.delete-btn').addClass('hidden');
            // 重置非编辑状态下的选中下标集合
            editSelectedIdnexs = [];
            // 如果在编辑前选中，则修改选中状态
            $('.check-item').each((index, item) => {
                if($(item).data('checked') == true) {
                    $(item).addClass("checked");
                }else {
                    $(item).removeClass("checked");
                }
            });
            if($('.single-box .check-item').length == selectedIndexs.length) {
                $('.all-check .check-item').addClass('checked');
            }else {
                $('.all-check .check-item').removeClass('checked');
            }
                // 判断是否还有数据
            // if($('.single-box').length == 0) {
            //     $(".wid-load").html("<p class='no-item'>o(╥﹏╥)o亲，您的购物车空空如也~~~</p>");
            //     $('.all-check .check-item').data('checked', false);
            //     $('.all-check .check-item').removeClass('checked');
            // }
            // 重置选中下标
            selectedIndexs = [];
            $(".single-box .check-item").each((index,item) => {
                if($(item).data('checked') == true ) {
                    selectedIndexs.push(index);
                } 
            });
            updateFoot();
        }
    });

          // 7. 处理删除
    $('.delete-btn').click(function() {
        alert('确认删除')
        let $orders = $('.single-box');
        editSelectedIdnexs.forEach(index => {
            // 删除页面元素
            $orders.eq(index).remove();
            datas.splice(index, 1);
            // 删除非编辑状态下的选中下标
            let idx = selectedIndexs.indexOf(index);
            if(idx != -1) {
                selectedIndexs.splice(idx, 1);
                
            }
        });
        // 更新全选状态
        $('.all-check .check-item').removeClass('checked');
        // 删除本地购物车数据
        
       remove(editSelectedIdnexs);
        
        
    });
     // 更新底部数据变化
     
     function updateFoot() {
        // 更新去结算购物车订单数量
        $('.settlement').text(`去结算(${selectedIndexs.length})`);
        $('.singleton').text(`${selectedIndexs.length}`);
        // 更新结算总结
        let total = 0;      
        selectedIndexs.forEach(index => {  
            // let total = 0;
            total += parseFloat(datas[index].total);
        });
        $('.total-price').text(`${total.toFixed(2)}`);
    }
    // 更新购物车每一个订单的数据变化
    function updateOrder(tar) {
        // 获取li
        let $order  = $(tar).parents('.single-box');
        // 获取li所在的下标
        let index   = $order.index();
        // 根据下标获取购物车数据
     
        console.log(datas);

        // 修改当前订单数据
        let count   = parseInt($order.find('.input').val());
        // order.total  = (order.num * order.price).toFixed(2);
        // // // 修改本地购物车存储的数据
        // modify(index, order);
        // // 修改页面价格显示
        // let priceArr = order.total.toString().split('.');
        // $order.find('.total-price').text(order.total);
    }
 
    function modify(index, order) {
        // 获取购物车订单
        let orders = JSON.parse(localStorage.orders);
        // 修改对应下标的订单
        orders[index] = order;
        // 更新本地购物车
        localStorage.orders = JSON.stringify(orders);
    }
    
   function remove(indexs) {
        // 获取购物车订单
        let orders = JSON.parse(localStorage.orders);
        let tmpArr = [];
        // 遍历购物车所有数据
        for(let i = 0, len1 = orders.length; i < len1; i++) {
            // 记录是否要将不删除的购物车数据存放至临时数组中
            let flag = false;
            // 遍历删除下标
            for(let j = 0, len2 = indexs.length; j < len2; j++) {
                // 判断购物车数据的下标和要删除的数据的下标是否匹配
                // 如果匹配，则表示这个数据要被删除
                // 就不用添加到临时数组中
                if(i == indexs[j]) {
                    flag = true;
                }
            }
            // 如果该数据下标没有对应要删除的数据下标，
            // 那么就将该数据存储到临时数组中即可
            // 整个循环结束之后，临时数据集合里面的数据就都是保留下来的数据了
            if(!flag) {
                tmpArr.push(orders[i]);
            }
        }
        // 更新本地购物车
        localStorage.orders = JSON.stringify(tmpArr);
    }
    console.log(localStorage.orders.length);
    // 更新购物车
    if($('.single-box').length == 0) {
         this.$alert( '你的购物车为空，请选购商品',{
          confirmButtonText: '确定',
            center: true,
          callback: action => {         

           
          }
          
        })

    }
    

    },
 
created(){
    if(sessionStorage.isLogin==false || sessionStorage.isLogin==null){
      
         this.$alert( '你还未登录，请先登录', {
          confirmButtonText: '确定',
          callback: action => {
          },
       
                })
    }

    this.rootArr = JSON.parse(localStorage.orders);
    console.log( this.rootArr);
    if(this.rootArr){
        let Arr =this.rootArr;
        this.rootArr.forEach(element => {
            this.element=element        
        });
    this.datass=this.rootArr;
    console.log(this.datass);
    }

}
}
</script>

<style scoped>
.check{
    background: pink;
}
.no-item{
    font-size: 20px;
    color: red;
    z-index: 10;
}
.wid-price{
    right:0;
    position: absolute;
    margin-right:15px;
}
.buy{
    width: 100%;
    height:auto;
    background: rgb(236, 234, 234);
    position: absolute;
    display: inline-block;
}
.bookname{
    color: black;
    font-size: 18px;
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.buy-list{
    width: 95%;
    height: auto;
    margin-top:20px !important;
    background: white;
    margin: 0 auto;
    z-index: 1000;
}
.buy-list img{
    width: 100px;
    height: 150px;
}
.buy-list-right{
    width: 55%;
    float: right;
    text-align: left;
}
.authorname{
    color: black;
    font-size: 18px;
    margin-top:20px;
}
.price{
    color: red;
}
.buy-list .check-box {
    height: 30px;
    width: 30px;
    position: relative;
 
}
.buy-list .check-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border:1px solid gray;
    border-radius: 50%;
}
.check-item {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2728770579,3616956553&fm=26&gp=0.jpg) no-repeat center center;
}

.checked{
    background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=80078889,1795350162&fm=26&gp=0.jpg);

}
/* 加减数量 */
.buy-list .input {
    width: 50px;
    height: 26px;
    background: #d2d2d2;
    text-align: center;
    border: none;
    outline: none;
}
.counter{
    float: right;
    position:relateve;
}
/* 底部全选按钮 */
.footer{
    width: 100%;
    height: 50px;
    background: rgb(221, 220, 220);
    position: fixed;
    /* z-index:1000; */
    bottom: 49px;
    text-align: left;
    line-height: 68px;
    color: red;
    padding-top: -20px;
}
.footer section{
    width: 30%;
    display: inline-block;
}
.footer .check-item{
    /* display: inline-block; */
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left:15px;
     top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border:1px solid gray; */
    margin-top:25px;
}
.footer .total-price {
    font-weight: bold;
}
.total-price-box{
    height: 100%;
    position: absolute;
    line-height: 60px;
}
.footer > .settlement {
    width: 120px;
    letter-spacing: 2px;
    background: rgb(245, 9, 2);
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 78px;
    float:right;
}
.footer > .delete-btn {
    width: 80px;
    height: 50px;
    border-radius: 15px;
    border: 1px solid #d3d3d3;
    text-align: center;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 50px;
    margin-right: 12px;
    float:right;
}
.check-tips{
    height: 30px;
    margin-top: -5px;
    display: inline-block;
    position:absolute;
}
.hidden { display: none !important; }
.buyBtn{
    width: 90%;
    height: 55px;
    background: rgb(42, 175, 42);
    margin-top:30px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
}
</style>

