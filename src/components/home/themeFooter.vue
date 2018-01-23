/**
* Author：Xavier;
* Create  Time：2018-01-22 13:43;
* Description：
*/

<template>
  <ul class="themeFooter">
    <p class="themeClass">
      <a>{{ contentData.reply_count }} 回复</a>
    </p>
    <li v-for="(item, index) in contentData.replies" :key="index">
      <a :id="item.id"></a>
      <div>
        <img :src="item.author.avatar_url" alt="">
        <span>{{item.author.loginname}}</span>
        <a :href="'#'+item.id">{{index+1}}楼<span> · </span>{{ item.create_at | oDate }}</a>
        <span class="author" v-if="item.author.loginname===contentData.author.loginname">作者</span>
      </div>
      <div v-html="item.content"></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'theme-footer',
  props: ['contentData']
}
</script>

<style lang="scss">
  .themeFooter{
    >li{
      background: #fff;
      border-top: 1px solid #f0f0f0;
      padding: 10px;
      >div{
        >.author{
          display: inline-block;
          color: #fff;
          padding: 1px;
          background: #80bd01;
        }
        >img{
          width: 30px;
          height: 30px;
          border-radius: 5px;
        }
        >span{
          font-size: 12px;
          font-weight: 900;
          color: #636363;
        }
        >a{
          display: inline;
          font-size: 12px;
          color: #4395da;
          >span{
            font-weight: 900;
          }
        }
      }
      >div:nth-child(3){
        padding-top: 5px;
        >.markdown-text{
          a{
            display: inline;
            color: #4395da;
          }
          >p{
            margin-bottom: 1em;
            font-size: 14px;
          }
        }
      }
    }
    >.themeClass{
      display: flex;
      flex-wrap: wrap;
      padding: 8px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: #f6f6f6;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      >a{
        display: inline-block;
        color: #000;
        margin: 0 10px;
        padding: 3px;
        font-size: 14px;
      }
    }
  }
</style>
