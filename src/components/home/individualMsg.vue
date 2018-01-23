/**
* Author：Xavier;
* Create  Time：2018-01-22 16:51;
* Description：
*/

<template>
    <div class="message">
      <div class="individualMsg">
        <p>{{gerenxinxi}}</p>
        <div>
          <img :src="individualMsg.avatar_url" alt="">
          <span>{{ individualMsg.loginname }}</span>
          <div>积分：{{ individualMsg.score }}</div>
          <p>"这家伙很懒,什么个性签名都没有留下。"</p>
        </div>
      </div>
      <div class="release" v-show="gerenxinxi==='个人信息'">
        <router-link tag="span" to="/topic/create">发布话题</router-link>
      </div>
      <div class="oImage">
        <a target="_blank" href="https://alinode.aliyun.com/?ref=cnode"><img src="https://dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""></a>
        <a target="_blank" href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc&utm_campaign=multicloud&utm_content=gift&ytag=cnodejs"><img src="https://dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG" alt=""></a>
        <a target="_blank" href="https://0x7.me/UDyj"><img src="https://dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O" alt=""></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'individual-msg',
  props: ['individualMsg', 'gerenxinxi']
}
</script>

<style scoped lang="scss">
  .message{
    width:100%;
    border-radius: 3px;
    >.individualMsg{
     font-size: 13px;
     margin-bottom: 13px;
      >p{
        padding: 12px ;
        background: #f6f6f6;
        border-radius: 3px 3px 0 0;
      }
      >div{
        padding: 10px;
        border-radius: 0 0 3px 3px;
        line-height: 2em;
        background: #fff;
        >img{
          width: 48px;
          height: 48px;
          border-radius: 3px;
        }
        >span{
          margin-left: 5px;
          font-size: 14px;
          color: #888;
        }
        >div{
          margin-top: 10px;
          font-size: 14px;
        }
        >p{
          font-style: italic;
        }
      }
    }
    >.release{
      margin-top: 10px;
      background: #fff;
      padding: 10px;
      border-radius: 3px;
      >span{
        background: #80bd01;
        border: none;
        display: inline-block;
        padding: 3px 10px;
        margin: 0;
        font-size: 14px;
        transition: all .2s ease-in-out;
        letter-spacing: 2px;
        box-shadow: none;
        line-height: 2em;
        vertical-align: middle;
        color: #fff;
        cursor: pointer;
        border-radius: 3px;
        transition: all 1s;
      }
      >span:hover{
        background: #39bd0e;
      }
    }
    >.oImage{
      padding: 10px;
      border-radius: 3px;
      background: #fff;
      margin-top: 10px;
      line-height: 2em;
      display: flex;
      flex-direction: column;
      >img{
        max-width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }
  }
</style>
