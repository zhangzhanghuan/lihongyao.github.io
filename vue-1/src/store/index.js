
import Vue  from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    // 数据
    state: {
        title: "",
        page:"",
        count: 0,
        showBottomNav:true,
        showMinepage:true,
        loginState: false
    },
    // 修改数据
    mutations: {
        increment(state) {
            // 变更状态
            state.count++;
          },
        // 修改标题状态
        changeTitle(state, title) {
            state.title = title;
        },
        changePage(state,page){
            state.page=page;
        },
        login(a,b){
            a.count=b
        },
        jian(a){
            a.count--
        },
        changeLoginState(state, loginState) {
            state.loginState = loginState;
        }
       
    },
   
});