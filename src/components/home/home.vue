/**
* Author：Xavier;
* Create  Time：2018-01-17 14:06;
* Description：
*/

<template>
  <div class="main-a">
    <div class="main-left">
      <p class="themeClass">
        <!--主题导航-->
        <router-link :class="{'router-link-active':!$route.query.tab}" :to="{ path:'/?tab=all' }" exact>全部</router-link>
        <router-link :to="{ path:'/?tab=good' }" exact>精华</router-link>
        <router-link :to="{ path:'/?tab=share'}" exact>分享</router-link>
        <router-link :to="{ path:'/?tab=ask' }" exact>问答</router-link>
        <router-link :to="{ path:'/?tab=job' }" exact>招聘</router-link>
        <router-link :to="{ path:'/?tab=dev' }" exact>客户端测试</router-link>
      </p>
      <!--主题导航内容组件-->
      <hemo-theme :themeData="themeClass"></hemo-theme>
      <!--分页器-->
      <el-pagination background layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange"></el-pagination>
    </div>
    <div class="main-right">
      <individual-msg gerenxinxi="个人信息" :individualMsg="individualMsg"></individual-msg>
    </div>
  </div>
</template>

<script>
// 引入组件
import hemoTheme from './hemoTheme'
import individualMsg from './individualMsg'
export default {
  name: 'home',
  data () {
    return {
      // 定义数据
      themeClass: {},
      oCurrent: 1,
      individualMsg: {}
    }
  },
  // 注册组件
  components: {
    hemoTheme,
    individualMsg
  },
  methods: {
    // 请求数据函数
    getData () {
      let oTab = this.$route.query.tab
      this.$http.get(this.oUrl + 'topics', {params: {page: this.oCurrent, tab: oTab, limit: 30}}).then((res) => {
        this.themeClass = res.data.data
      })
    },
    // 获取分页器页码
    handleCurrentChange (val) {
      this.oCurrent = val
      this.getData()
    },
    getUser () {
      this.$http.get(this.oUrl + 'user/laixiaoyi').then((res) => {
        this.individualMsg = res.data.data
      })
    }
  },
  created () {
    // 实例创建完成请求数据
    this.getData()
    this.getUser()
  },
  watch: {
    // 监听路由，发生变化时重新请求数据
    $route () {
      this.getData()
      this.getUser()
    }
  }
}
</script>

<style lang="scss">

</style>
