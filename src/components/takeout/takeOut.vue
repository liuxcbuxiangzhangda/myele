<template>
  <div class="takeOut">
    <!--外卖页面头部-->
    <takeoutHead></takeoutHead>
    <!--外卖页面录播图-->
    <takeoutTurn></takeoutTurn>
  </div>
</template>

<script>
  import takeoutHead from './children/takeoutHead'
  import takeoutTurn from './children/takeoutTurn'
export default {
  name: 'tackOut',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      takeoutHead,
      takeoutTurn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
