/**
* Author：Xavier;
* Create  Time：2018-01-18 23:17;
* Description：
*/

<template>
  <div class="main">
    <div class="details">
      <theme-header :contentData="contentData"></theme-header>
      <theme-content :contentData="contentData"></theme-content>
      <theme-footer @fuqinupData="upData" :contentData="contentData"></theme-footer>
      <revert-header @fuqinupData="upData"></revert-header>
    </div>
    <div class="main-right">
      <individual-msg gerenxinxi="作者" :individualMsg="individualMsg"></individual-msg>
    </div>
  </div>
</template>

<script>
import themeContent from './themeContent'
import themeHeader from './themeHeader'
import themeFooter from './themeFooter'
import individualMsg from './individualMsg'
import revertHeader from './revertHeader'
export default {
  name: 'theme-details',
  components: {
    themeFooter,
    themeContent,
    themeHeader,
    individualMsg,
    revertHeader
  },
  data () {
    return {
      contentData: {},
      individualMsg: {}
    }
  },
  methods: {
    getData () {
      let id = this.$route.params.id
      // console.log(id)
      this.$http.get(this.oUrl + 'topic/' + id, {params: {accesstoken: '659b6889-f6c6-4ee7-808d-8286a62f701a'}}).then((res) => {
        this.contentData = res.data.data
        // console.log(this.contentData)
        this.$http.get(this.oUrl + 'user/' + this.contentData.author.loginname).then((res) => {
          this.individualMsg = res.data.data
        })
      })
    },
    upData () {
      this.getData()
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
  @media (max-width: 975px) {
    .main-right{
      display: none;
    }
    .main{
      width: 96%;
    }
    #app>.main>.details{
      width: 100%;
    }
  }
  .main{
    background: #e1e1e1;
    display: flex;
    justify-content: space-between;
    >.details{
      width: 68%;
    }
    >.main-right{
      width: 30%;
    }
  }
</style>
