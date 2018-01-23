/**
* Author：Xavier;
* Create  Time：2018-01-23 21:25;
* Description：
*/

<template>
  <div class="revertMsg">
    <img src="../../assets/img/aaa_03.jpg" alt="">
    <el-input class="oTextarea" type="textarea" :rows="8"  v-model="textarea4"></el-input>
    <el-button size="mini" type="primary">回复</el-button>
  </div>
</template>

<script>
export default {
  name: 'revert-msg',
  data () {
    return {
      textarea4: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .revertMsg{
    background: #fff;
    border-radius: 0 0 3px 3px;
    padding: 10px;
    >.oTextarea{
      margin: 10px 0;
      >.el-textarea__inner{
        border: none;
      }
    }
  }
</style>
