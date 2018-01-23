/**
* Author：Xavier;
* Create  Time：2018-01-17 18:38;
* Description：
*/

<template>
  <!--主题导航内容组件-->
    <ul class="main">
      <li v-for="(item, index) in themeData" :key="index">
        <div>
          <a href="javascript:;"><img :src="item.author.avatar_url" alt=""></a>
          <span>
            <span>{{item.reply_count}}</span><span>/</span><span>{{item.visit_count}}</span>
          </span>
          <div v-if="item.top">置顶</div>
          <div v-else-if="item.good">精华</div>
          <!--判断当前条数据的tab所属类型及置顶、精华字段-->
          <div style="color: #999;background: #e5e5e5;" v-else-if="(item.tab==='ask'&&!$route.query.tab)||(item.tab==='ask'&&$route.query.tab==='all')">问答</div>
          <div style="color: #999;background: #e5e5e5;" v-else-if="(item.tab==='share'&&!$route.query.tab)||(item.tab==='share'&&$route.query.tab==='all')">分享</div>
          <router-link tag="p" :to="{ path:'/topic/'+item.id }">{{item.title}}</router-link>
        </div>
        <span>
        <img :src="item.author.avatar_url" alt="">
        <span>{{item.last_reply_at | oDate }}</span>
      </span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Main',
  // 接收父级传递的数据
  props: ['themeData'],
  updated () {
    // console.log(this.themeData)
    // console.log(this.$route)
  }
}
</script>

<style lang="scss">
  @import "../../assets/css/commonality";
  .main{
    background: #fff;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    >li:hover{
      background: #f6f6f6;
    }
    >li{
      border-bottom: 1px solid #efefef;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      position: relative;
      img{
        border-radius: 5px;
      }
      >span{
        font-size: 10px;
        min-width: 70px;
        text-align: right;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        >img{
          width: 20px;
          height: 20px;
        }
      }
      >div{
        display: flex;
        align-items: center;
        width: 70%;
        >a{
          width: 30px;
          height: 30px;
          min-width: 30px;
        }
        >div{
          display: inline-block;
          font-size: 12px;
          padding: 2px 4px;
          background: #80bd01;
          min-width: 24px;
          color: #fff;
          border-radius: 3px;
          margin-right: 5px;
        }
        >p:hover{
          border-bottom: 1px solid #000;
        }
        >p{
          border-bottom: 1px solid rgba(0,0,0,0);
          @extend .textHide;
          cursor: pointer;
        }
        >span{
          min-width: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px;
          >span{
            font-size: 10px;
          }
          >span:nth-child(1){
            color: #9e78cb;
            font-size: 14px;
          }
          >span:nth-child(3){
            color: #b4b4b4;
          }
        }
      }
    }
    li:last-child{
      border: none;
    }
  }
</style>
