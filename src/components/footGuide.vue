<template>
  <div id="footGuide">
   <ul>
     <li @click="chosed(1,'/')" :class="1==num?select:unselect" class="guideitem">
       <i class="icon iconfont icon-changyonglogo40"></i>
       <div>外卖</div>
     </li>
     <li @click="chosed(2,'/find')" :class="2==num?select:unselect" class="guideitem">
       <i class="icon iconfont icon-faxian-"></i>
       <div>发现</div>
     </li>
     <li @click="chosed(3,'/orderlist')" :class="3==num?select:unselect" class="guideitem">
       <i class="icon iconfont icon-iconfontdingdaneps"></i>
       <div>订单</div>
     </li>
     <li @click="chosed(4,'/personal')" :class="4==num?select:unselect" class="guideitem">
       <i class="icon iconfont icon-gerenzhongxin"></i>
       <div>我的</div>
     </li>
   </ul>

  </div>
</template>

<script>
  export default {
    name: 'footGuide',
    data(){
        return{
          num:1,
          select:'select',
          unselect:'unselect'
        }
    },
    methods:{
        /*点击导航栏对应变化*/
       chosed(intem,path){
        this.num=intem;
        this.gotoAdress(path)
       }
    },
    created:function(){

    }
  }


</script>

<style >
  #footGuide{
    position: fixed;
    bottom: 0;
    padding: 5px 0;
    width: 100%;
    background-color: #fff;
  }
  li{
    float: left;
    width: 25%;
  }

  .iconfont{
    font-size: 0.45rem;
  }
  .guideitem{
    font-size: 0.45rem;
    display: inline-block;
    height: 100%;
  }
  .select{
    color: #4DA3E8;
  }
</style>
