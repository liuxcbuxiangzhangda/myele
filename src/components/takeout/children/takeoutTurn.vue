<template>
  <div class="takeoutTurn">
    <el-carousel :autoplay="false" trigger="click"  indicator-position="outside" height="3rem">
      <el-carousel-item v-for="(item,index) in foods" :key="index">

          <a v-for="list in item">
            {{list.name}}
          </a>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'takeoutTurn',
  data () {
    return {
      foods:[
          [{name:'甜品饮品',src:''},{name:'美食',src:''},{name:'准时达',src:''},{name:'新店特惠',src:''},{name:'鲜花蛋糕',src:''},{name:'包子粥',src:''},{name:'预定早餐',src:''},{name:'预定早餐',src:''}],
          [{name:'下午茶',src:''},{name:'果蔬生鲜',src:''},{name:'大牌碧池',src:''},{name:'浪漫鲜花',src:''},{name:'甜品饮品',src:''},{name:'甜品饮品',src:''},{name:'甜品饮品',src:''}]
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
<style>
  .takeoutTurn .el-carousel__arrow{
    height: 0.6rem;
    width: 0.6rem;
  }
</style>
