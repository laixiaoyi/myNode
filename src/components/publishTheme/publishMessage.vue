/**
* Author：Xavier;
* Create  Time：2018-01-23 11:18;
* Description：
*/

<template>
    <div class="publishMessage">
      <el-alert :title="prompt" type="error" center show-icon v-show="onOff" :closable="false"></el-alert>
      <div class="oSelect">
        <p>选择版块：</p>
        <el-select v-model="value4" clearable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <el-input type="textarea" autosize :minlength="10" placeholder="标题数字10字以上" v-model="textarea2"></el-input>
      <img src="../../assets/img/aaa_03.jpg" alt="">
      <el-input class="oTextarea" type="textarea" :rows="18"  v-model="textarea3"></el-input>
      <el-button type="primary" @click="oSubmit">提交</el-button>
    </div>
</template>

<script>
export default {
  name: 'publish-message',
  data () {
    return {
      options: [{
        value: 'share',
        label: '分享'
      }, {
        value: 'ask',
        label: '问答'
      }, {
        value: 'job',
        label: '招聘'
      }, {
        value: 'dev',
        label: '客户端测试'
      }],
      value4: '',
      textarea2: '',
      textarea3: '',
      prompt: '',
      onOff: false
    }
  },
  created () {
    if (this.$route.params.id !== '0') {
      let mData = this.$route.params.oData
      this.value4 = mData.tab
      this.textarea2 = mData.title
      mData.content = mData.content.replace(/<.*?>/ig, '')
      this.textarea3 = mData.content
    }
  },
  methods: {
    oSubmit () {
      if (this.value4 === '') {
        this.prompt = '请选择版块'
        this.onOff = true
        return this.prompt
      }
      if (this.textarea2 === '') {
        this.prompt = '请输入标题'
        this.onOff = true
        return this.prompt
      }
      if (this.textarea2.length < 10) {
        this.prompt = '标题不能小于10个字符'
        this.onOff = true
        return this.prompt
      }
      if (this.textarea3 === '') {
        this.prompt = '请输入内容'
        this.onOff = true
        return this.prompt
      }
      this.onOff = false
      if (this.$route.params.id === '0') {
        this.$http.post(this.oUrl + 'topics', {accesstoken: '659b6889-f6c6-4ee7-808d-8286a62f701a', title: this.textarea2, tab: this.value4, content: this.textarea3}).then((res) => {
          alert('发帖成功')
          this.$router.go(-1)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.$http.post(this.oUrl + 'topics/update', {accesstoken: '659b6889-f6c6-4ee7-808d-8286a62f701a', topic_id: this.$route.params.oData.id, title: this.textarea2, tab: this.value4, content: this.textarea3}).then((res) => {
          alert('修改成功')
          this.$router.go(-1)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .publishMessage{
    padding: 10px;
    background: #fff;
    >.oSelect{
      display: flex;
      align-items: center;
    }
    >.el-textarea{
      margin-top: 10px;
    }
    >img{
      width: 100%;
      margin-top: 10px;
    }
  }
</style>
