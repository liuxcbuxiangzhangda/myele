<template>
  <div class="takeoutHead">
    <div class="address">
      <i class="icon iconfont icon-dizhiicon"></i>
      <span>曙光国际</span>
      <i class="icon iconfont icon-xiasanjiao"></i>
      <i class="icon iconfont icon-5"></i>
    </div>
    <input type="text" placeholder="输入商家、商品名称">
    <ul class="clearfix">
      <li v-for="foodlist in foodlist">{{foodlist}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'takeoutHead',
  data () {
    return {
      foodlist:["奶茶","寿司","冒菜","面","包子","沙拉","肠粉"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .takeoutHead{
    padding: 0.5rem;
    background-color: #3190E8;
    color: #fff;
  }
  .address{
    text-align: left;
    padding-bottom: 0.19rem;
  }
  .icon-5{
    float: right;
  }
  .takeoutHead span{
    font-size: 0.5rem;
  }
  input{
    width: 100%;
    height: 0.65rem;
    text-align: center;
    color:#666 ;
  }
  li{
    float: left;
    padding-right: 0.2rem;
  }
</style>
