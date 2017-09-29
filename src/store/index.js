/**
 * Created by Administrator on 2017/9/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(vuex)
/*存放公用的对象*/
const state={
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  cartList: {}// 加入购物车的商品列表

}
export default new Vuex.Store({
  state, //状态对象
  getters,//过滤操作
  actions,//改变状态对象操作
  mutations//改变状态对象操作
})
