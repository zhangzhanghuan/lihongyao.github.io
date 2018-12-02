require('../less/shopcarts.less');

        let datas = null;  // 记录购物车数据
        let selectedIndexs = []; // 记录选中下标
        let editSelectedIdnexs = []; // 记录编辑状态下选中下标
        let isEditing = false; // 记录编辑状态
        // 1.读取购物车
         rootArr = JSON.parse(localStorage.orders)
        ShoppingCartt(rootArr);
   function ShoppingCartt(orders) {
        // 判断购物车是否有数据
        if(orders) {
            datas = orders;
            $(".wid-load").html(`
            ${(function(){
                let arr=[];
                orders.forEach(function(order,index){
                    arr[index]=`
                    <li class="check-box single-box">
            <span class="check-item"></span>
            <a href="" class="wid-img">
                <img src="${order.img}" alt="">
            </a>
            <a href="" class="des">
                <p>${order.name}</p>
                <p> ${order.color} 魅族真品 值得信赖</p>
            </a>
            <div class="cart-price">
                <p>
                    ￥
                    <span>${order.price}</span>
                </p>
            </div>
            <div class="cart-price cart-input">
                    <span class="down">-</span>
                    <input type="text" value="${order.num}" class="input">
                    <span class="up">+</span>
                </div>
                <div class="cart-price">
                        <p>
                            ￥
                            <span class="or-total">${order.total}</span>
                        </p>
                    </div>
                    <div class="not">
                        <p>--
                        </p>
                        <i class="iconfont">&#xe614;</i>
                    </div>
        </li>
                    `
                })
                return arr.join("");
            })()}`);
        }else {  // 没数据
            $(".wid-load").html("<p class='no-order'>o(╥﹏╥)o亲，您的购物车空空如也~~~</p>");
        }
        // 

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
        let len = $(".single-box .check-item").length;
        // 判断是点击全选还是单独选
        if($(this).parent().hasClass('all-check')) { // 全选
            if($checkItem.hasClass('checked')) { // 选中
                // 更新下标
                for(let i = 0; i < len; i++) {
                    isEditing ? editSelectedIdnexs[i] = i : selectedIndexs[i] = i;
                }
                $(".check-box   .check-item").addClass('checked')
            }else { // 未选中
                // 如果全选按钮为选中，则根据编辑状态清空下标集合
                isEditing ? editSelectedIdnexs = [] : selectedIndexs = [];
                $(".check-box   .check-item").removeClass('checked');
            }
            if(!isEditing) {
                updateFoot();
                $(".check-box .check-item").data('checked', $checkItem.hasClass('checked'));
            }
        }else { // 单选
            // 获取下标
            let index = $checkItem.parents('.single-box').index();
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
        if($(this).text()==="完成"){
            $(".edit").css({
                "color":"red"
            });
        }else{
            $(".edit").css({
                "color":"#00c3f5"
            });
        }
        // 根据编辑状态切换显示
        if(isEditing) {
            $(".not p").addClass("let-show").text("");
            $(".let-show").next().css({"opacity":"1"});
            $('.check-item').removeClass('checked');
            $(".settlement").removeClass("check-color");
        }else {
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
            if($('.single-box').length == 0) {
                $(".wid-load").html("<p class='no-order'>o(╥﹏╥)o亲，您的购物车空空如也~~~</p>");
                $('.all-check .check-item').data('checked', false);
                $('.all-check .check-item').removeClass('checked');
            }
            // 重置选中下标
            selectedIndexs = [];
            $(".single-box .check-item").each((index,item) => {
                if($(item).data('checked') == true ) {
                    selectedIndexs.push(index);
                } 
            });
            updateFoot();
            $(".not p").removeClass("let-show").text("--");
            $(".not p").next().css({"opacity":"0"});
        }
    });
          // 4. 处理‘+’
    $('.up').click(function() {
        // 4.1. 更新输入框的数量值
        let $input = $(this).siblings('.input');
        $input.val(parseInt($input.val()) + 1);
        // 4.2. 修改购物车订单参数
        updateOrder(this);
        updateFoot();
    });
    // 5. 处理‘-’
    $('.down').click(function() {
       // 5.1. 更新输入框的数量值
       let $input = $(this).siblings('.input');
       if($input.val() === '1') {
           return;
       }
       $input.val(parseInt($input.val()) - 1);
       // 5.2. 修改购物车订单参数
       updateOrder(this);
       updateFoot();

    });
     // 6. 处理输入框
     $('.input').change(function() {
        // 6.1. 异常处理,数量不能小于1
        if($(this).val() < 1) {
            $(this).val(1);
        }
        // 6.2. 修改购物车订单参数
        updateOrder(this);
        updateFoot();
    });

     // 7. 处理删除
     let $orders = $('.single-box');
            $(".not i").each(function(index,val){
                this.dataset.index=index;
            })
            $(".single-box .not i").on("click",function(){ 
                // 删除页面元素
          index=this.dataset.index;
          console.log(index);
           $orders.eq(index).remove();
           datas.splice(index, 1);
           // 删除非编辑状态下的选中下标
           let idx = selectedIndexs.indexOf(index);
           if(idx != -1) {
               selectedIndexs.splice(idx, 1);
           }
       // 更新全选状态
       $('.all-check .check-item').removeClass('checked');
       // 删除本地购物车数据
       remove(index);
           })
     // 更新底部数据变化
     
     function updateFoot() {
        // 更新去结算购物车订单数量
        $('.settlement').text(`去结算(${selectedIndexs.length})`);
        $('.singleton').text(`${selectedIndexs.length}`);
        if($(".check-item").hasClass("checked")){
            $('.settlement').addClass("check-color");
        }else{
            $('.settlement').removeClass("check-color");
        }
        // 更新结算总结
        let total = 0;
        selectedIndexs.forEach(index => {
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
        let order   = datas[index];
        // 修改当前订单数据
        order.num    = parseInt($order.find('.input').val());
        order.total  = (order.num * order.price).toFixed(2);
        // // 修改本地购物车存储的数据
        modify(index, order);
        // 修改页面价格显示
        // let priceArr = order.total.toString().split('.');
        $order.find('.or-total').text(order.total);
    }
 
    function modify(index, order) {
        // 获取购物车订单
        let orders = JSON.parse(localStorage.orders);
        // 修改对应下标的订单
        orders[index] = order;
        // 更新本地购物车
        localStorage.orders = JSON.stringify(orders);
    }
    };
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
    //跟新购物车
    if($('.single-box').length == 0) {
        $(".wid-load").html("<p class='no-order'>o(╥﹏╥)o亲，您的购物车空空如也~~~</p>");
    }
    // 处理登陆注册
console.log(sessionStorage.isLogin);
if(sessionStorage.isLogin){
    $(".user-login").text("个人中心");
    $(".user-register").text("立即注销");
}else{
    $(".user-login").text("立即登陆");
    $(".user-register").text("立即注册");
}
if( $(".user-login").text()==="个人中心"){
    $(".user-login").css({
        "color":"red"
    });
    $(".user-register").css({
        "color":"red"
    })
}else{
    $(".user-login").css({
        "color":"#515151"
    })
    $(".register-btn").css({
        "color":"#515151"
    })
};
// 点击注销
$(".user-register").on("click",function(){
    sessionStorage.isLogin=false;
    sessionStorage.clear();
    $(".user-login").text("立即登陆");
    $(".user-register").text("立即注册");
    $(".user-login").css({
        "color":"#515151"
    })
    $(".user-register").css({
        "color":"#515151"
    })
})
$(".user-login").click(function(){
    location.href="./login.html"
})