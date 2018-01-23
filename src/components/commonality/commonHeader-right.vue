/**
* Author：Xavier;
* Create  Time：2018-01-23 09:24;
* Description：
*/

<template>
  <div class="header-right">
    <div class="describe">
      <p>{{ describe }}</p>
    </div>
    <div class="message">
      <p v-for="(item, index) in arr" :key="index" v-html="item"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: ['describe', 'arr']
}
</script>

<style scoped lang="scss">
  .header-right{
    width:100%;
    margin-bottom: 10px;
    >.describe{
      font-size: 13px;
      background: #fff;
      border-radius: 3px 3px 0 0;
      >p{
        padding: 12px ;
        background: #f6f6f6;
        border-radius: 3px 3px 0 0;
      }
    }
    .message{
      padding: 10px;
      background: #fff;
      border-radius: 0 0 3px 3px;
      >p{
        line-height: 2em;
        font-size: 13px;
      }
    }
  }
</style>
