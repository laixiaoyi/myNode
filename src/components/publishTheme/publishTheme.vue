/**
* Author：Xavier;
* Create  Time：2018-01-23 09:19;
* Description：
*/

<template>
  <div class="main-a">
    <div class="main-left">
      <common-header-left></common-header-left>
      <publish-message></publish-message>
    </div>
    <div class="main-right">
      <common-header-right :arr="arr" describe="Markdown 语法参考"></common-header-right>
      <common-header-right :arr="arr1" describe="话题发布指南"></common-header-right>
    </div>
  </div>
</template>

<script>
import commonHeaderRight from '../commonality/commonHeader-right'
import commonHeaderLeft from '../commonality/commonHeader-left'
import publishMessage from './publishMessage'
export default {
  name: 'publish-theme',
  components: {
    commonHeaderRight,
    commonHeaderLeft,
    publishMessage
  },
  data () {
    return {
      arr: ['### 单行的标题', '**粗体**', '`console.log(\'行内代码\')`', '```js\\n code \\n``` 标记代码块', '[内容](链接)', '![文字说明](图片链接)', '<a target="_blank" style="color: #888;cursor: pointer"href="https://segmentfault.com/markdown">Markdown 文档</a>'],
      arr1: ['尽量把话题要点浓缩到标题里', '代码含义和报错可在 SegmentFault 提问']
    }
  }
}
</script>

<style lang="scss">

</style>
