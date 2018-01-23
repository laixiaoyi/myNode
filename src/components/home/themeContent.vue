/**
* Author：Xavier;
* Create  Time：2018-01-19 08:51;
* Description：
*/

<template>
    <div class="content">
      <div v-html="contentData.content"></div>
    </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['contentData']
}
</script>

<style lang="scss">
  .content{
    background: #fff;
    padding: 10px 20px;
    border-top: 1px solid #e5e5e5;
    .markdown-text{
      h2{
        margin: 30px 0 15px;
        border-bottom: 1px solid #eee;
      }
      ol, ul {
        padding: 0;
        margin: 0 0 10px 25px;
        list-style: inside;
        li{
          line-height: 2em;
          font-size: 14px;
        }
      }
      p:first-child{
        margin-top: 0;
      }
      a{
        color: #87b8da;
        word-wrap: break-word;
        display: inline;
      }
      p{
        font-size: 15px;
        line-height: 1.7em;
        overflow: auto;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        line-height: 2em;
        margin: 1em 0;
      }
    }
  }
</style>
