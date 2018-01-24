/**
* Author：Xavier;
* Create  Time：2018-01-23 21:25;
* Description：
*/

<template>
  <div class="revertMsg">
    <img src="../../assets/img/aaa_03.jpg" alt="">
    <el-input class="oTextarea" type="textarea" :rows="8"  v-model="textarea4"></el-input>
    <el-button size="mini" type="primary" @click="revert">回复</el-button>
  </div>
</template>

<script>
export default {
  name: 'revert-msg',
  props: ['str'],
  data () {
    return {
      textarea4: ''
    }
  },
  created () {
    this.textarea4 = this.str
  },
  methods: {
    revert () {
      this.$http.post(this.oUrl + 'topic/' + this.$route.params.id + '/replies', {accesstoken: '659b6889-f6c6-4ee7-808d-8286a62f701a', content: this.textarea4}).then((res) => {
        this.$emit('supData')
        alert('留言成功')
        this.textarea4 = ''
      }).catch(() => {
        alert('回复次数上限或网络错误')
      })
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
