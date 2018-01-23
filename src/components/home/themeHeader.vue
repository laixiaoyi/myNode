/**
* Author：Xavier;
* Create  Time：2018-01-19 13:42;
* Description：
*/

<template>
    <div class="header">
        <span>
          <span class="topStatus" v-if="contentData.top">置顶</span>
          <span class="topStatus" v-else-if="contentData.good">精华</span>
          {{contentData.title}}
        </span>
        <div>
          <span>发布于 {{contentData.create_at | oDate }}</span>
          <span>作者 {{authorName}}</span>
          <span>{{contentData.visit_count}} 次浏览</span>
          <span>最后一次编辑是 {{ contentData.last_reply_at | oDate }}</span>
          <span v-if="contentData.tab==='share'">来自 分享</span>
          <span v-else-if="contentData.tab==='ask'">来自 问答</span>
          <span v-else-if="contentData.tab==='job'">来自 招聘</span>
          <span v-else-if="contentData.tab==='dev'">来自 客户端测试</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'theme-header',
  props: ['contentData'],
  data () {
    return {
      // 解决contentData.author.loginname作者名渲染报错问题
      authorName: ''
    }
  },
  // 解决contentData.author.loginname作者名渲染报错问题
  beforeUpdate () {
    this.authorName = this.contentData.author.loginname
  }
}
</script>

<style scoped lang="scss">
  .header{
    background: #fff;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    >div{
      font-size: 12px;
      color: #838383;
      overflow: hidden;
      line-height: 20px;
      >span:before {
        content: " • ";
      }
    }
    >span{
      font-size: 22px;
      font-weight: 700;
      margin: 8px 0;
      display: inline-block;
      vertical-align: bottom;
      width: 75%;
      line-height: 130%;
      >span{
        background: #80bd01;
        padding: 2px 4px;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -o-border-radius: 3px;
        color: #fff;
        font-size: 12px;
      }
    }
  }
</style>
