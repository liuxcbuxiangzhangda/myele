/**
 * Created by Administrator on 2017/9/28.
 */
export default {
  install(Vue,options){
    /*gotoAdress相当于锚点作用*/
    Vue.prototype.gotoAdress=function (path) {
      this.$router.push(path)
    }
  }

}
