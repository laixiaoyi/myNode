/**
* Author：Xavier;
* Create  Time：2018-01-23 10:13;
* Description：
*/

<template>
  <div class="header-left">
    <p class="themeHeader">
      <router-link to="/" tag="span">主页 /  </router-link>
      <span>{{describe}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'common-header-left',
  data () {
    return {
      describe: ''
    }
  },
  created () { this.$route.params.id === '0' ? this.describe = '发布话题' : this.describe = '编辑话题' }
}
</script>

<style scoped lang="scss">
  .header-left{
    >.themeHeader{
      display: flex;
      flex-wrap: wrap;
      padding: 8px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: #f6f6f6;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      >span{
        display: inline-block;
        color: #80bd01;
        padding: 3px;
        font-size: 14px;
      }
      >span:nth-child(1){
        cursor: pointer;
      }
      >span:nth-child(2){
        color: #999;
      }
    }
  }
</style>
