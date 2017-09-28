<template>
  <div class="takeOut">
    <takeoutHead></takeoutHead>
  </div>
</template>

<script>
  import takeoutHead from './children/takeoutHead'
export default {
  name: 'tackOut',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      takeoutHead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
