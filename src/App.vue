<template>
  <div id="app">
    <!--headerNav-->
    <div class="navbar">
      <nav class="nav">
        <div class="logo">
          <router-link to="/"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"></router-link>
          <input type="text">
          <i class="el-icon-search"></i>
        </div>
        <!--导航1级路由-->
        <ul class="navigate">
          <router-link to="/" tag="li">首页</router-link>
          <router-link to="/unreadNews" tag="li">未读消息</router-link>
          <router-link to="/newbie" tag="li">新手入门</router-link>
          <router-link to="/API" tag="li">API</router-link>
          <router-link to="about" tag="li">关于</router-link>
          <router-link to="settings" tag="li">设置</router-link>
          <router-link to="login" tag="li">登录</router-link>
        </ul>
      </nav>
    </div>
    <!--headerNav  end-->
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app{
    width: 100%;
    background: #e1e1e1;
  }
  .view{
    width: 90%;
    margin: 0 auto;
    min-height: 400px;
    max-width: 1400px;
    overflow: hidden;
    padding: 15px 0;
  }
  .navbar{
    width: 100%;
    background: #444;
    font-size: 13px;
  }
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    padding: 5px;
    max-width: 1400px;
    >.logo{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      >a{
        width: 120px;
        padding: 3px 20px;
        height: 34px;
        line-height: 34px;
        color: #ccc;
        font-weight: 700;
      }
      >i{
        position: absolute;
        top: 10px;
        left: 165px;
        font-size: 20px;
      }
      >input{
        width: 233px;
        height: 26px;
        border: none;
        border-radius: 50px;
        background: rgba(222,222,221,0.5);
        outline: none;
        padding-left: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        transition: all 1s;
      }
      >input:hover{
        background: #fff;
      }
    }
    .navigate{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      >li{
        padding: 10px 15px;
        cursor: pointer;
        color: #ccc;
      }
      >li:hover{
        color: #fff;
      }
    }
  }
</style>
