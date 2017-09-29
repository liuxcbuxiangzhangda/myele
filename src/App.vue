<template>
  <div id="app">
    <div class="warp">
      <router-view></router-view>
    </div>
    <footGuide></footGuide>
  </div>
</template>

<script>
  import footGuide from '@/components/footGuide'
export default {
  name: 'app',
  components:{
    footGuide
  }
}
</script>
<style>
  @import "assets/css/common.css"; /*引入全局公用css*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
  background-color: #F5F5F5;
}
</style>
