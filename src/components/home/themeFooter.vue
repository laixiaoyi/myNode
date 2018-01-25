/**
* Author：Xavier;
* Create  Time：2018-01-22 13:43;
* Description：
*/

<template>
  <ul class="themeFooter">
    <p class="themeClass">
      <span>{{ contentData.reply_count }} 回复</span>
    </p>
    <li v-for="(item, index) in contentData.replies" :key="index">
      <a :id="item.id"></a>
      <div>
        <img class="tieImage" :src="item.author.avatar_url" alt="">
        <span>{{item.author.loginname}}</span>
        <a :href="'#'+item.id">{{index+1}}楼<span> · </span>{{ item.create_at | oDate }}</a>
        <span class="author" v-if="item.author.loginname===contentData.author.loginname">作者</span>
        <i title="回复" class="el-icon-message" @click="altRevert(index,item)"></i>
        <i v-if="item.author.loginname === 'laixiaoyi'" title="删除" class="el-icon-delete"></i>
        <i v-if="item.author.loginname === 'laixiaoyi'" title="编辑" class="el-icon-edit"></i>
        <i title="点赞" :class="{'good': item.ups.length===0,'heise': item.is_uped}" class="el-icon-circle-check-outline" @click="oGood(item, index)">{{ item.ups.length }}</i>
      </div>
      <div v-html="item.content"></div>
      <revert-msg @supData="fuqinupData" v-if="revertShow === index" :str="oAltStr"></revert-msg>
    </li>
  </ul>
</template>

<script>
import revertMsg from '../commonality/revertMsg'
export default {
  name: 'theme-footer',
  props: ['contentData'],
  components: {
    revertMsg
  },
  data () {
    return {
      revertShow: false,
      oAltStr: ''
    }
  },
  created () {

  },
  methods: {
    altRevert (index, item) {
      this.revertShow = index
      this.oAltStr = '@' + item.author.loginname + '  '
      // console.log(item)
    },
    fuqinupData () {
      this.$emit('fuqinupData')
      this.revertShow = false
    },
    oGood (item, index) {
      if (item.author.loginname === 'laixiaoyi') {
        alert('不能为自己点赞')
        return
      }
      this.$http.post(this.oUrl + 'reply/' + item.id + '/ups', { accesstoken: '659b6889-f6c6-4ee7-808d-8286a62f701a' }).then((res) => {
        this.$emit('fuqinupData')
      })
    }
  }
}
</script>

<style lang="scss">
  .themeFooter{
    margin-top: 10px;
    >li:hover{
      >div>.good{
        display: inline;
      }
    }
    >li{
      background: #fff;
      border-top: 1px solid #f0f0f0;
      padding: 10px;
      >div:nth-child(3){
        margin-left: 40px;
      }
      >div{
        >.good{
          display: none;
        }
        >i:last-child{
          color: #ccc;
        }
        >.heise{
          color: #000 !important;
        }
        >i{
          float: right;
          font-size: 20px;
          margin: 2px;
        }
        >i:hover{
          color: #80bd01;
          cursor: pointer;
        }
        >.author{
          display: inline-block;
          color: #fff;
          padding: 1px;
          background: #80bd01;
        }
        >.tieImage{
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
      >span{
        display: inline-block;
        color: #000;
        padding: 3px;
        font-size: 14px;
      }
    }
  }
</style>
