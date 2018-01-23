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
      <theme-footer :contentData="contentData"></theme-footer>
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
export default {
  name: 'theme-details',
  components: {
    themeFooter,
    themeContent,
    themeHeader,
    individualMsg
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
      this.$http.get(this.oUrl + 'topic/' + id).then((res) => {
        this.contentData = res.data.data
        this.$http.get(this.oUrl + 'user/' + this.contentData.author.loginname).then((res) => {
          this.individualMsg = res.data.data
        })
      })
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
