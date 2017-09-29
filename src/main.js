// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/rem'  //配置字体自适应
import util from '@/assets/js/util' //全局函数
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
window.$=require('jquery')

Vue.use(ElementUI);
/*注册全局函数，common文件里面写的全局要使用的函数*/
Vue.use(util);
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
