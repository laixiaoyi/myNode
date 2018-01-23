/**
* Author：Xavier;
* Create  Time：2018-01-23 21:23;
* Description：
*/

<template>
    <div class="header">
      <p class="themeClass">
        <span>添加回复</span>
      </p>
      <revert-msg></revert-msg>
    </div>
</template>

<script>
import revertMsg from '../commonality/revertMsg'
export default {
  name: 'revert-header',
  components: {
    revertMsg
  }
}
</script>

<style scoped lang="scss">
  .header{
    margin-top: 10px;
    >.themeClass{
      >span{
        font-size: 14px;
      }
    }
    >p{
      border-bottom: 1px solid #ccc;
    }
  }
</style>
