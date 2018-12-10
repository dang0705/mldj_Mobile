<template>
  <div id="activities" >
    <div ref="activities">
      <template
        v-for="(item,i) in list"
      >
        <card
          :footer="{title:'活动详情',link:'/details/'+item.id}"
          :class="item.status===0?'doing':'finish'"
          ref="card"
        >
          <h2 slot="content">{{item.title}}</h2>
          <div slot="content" class="imgWrapper">
            <img width="100%" class="statusImg" :src="item.status===0?'static/doing.png':'static/finish.png'" alt="">
          </div>
          <p slot="content">价格:{{item.price}}</p>
          <p slot="content" @click="toDetails(item.id)">查看详情</p>
        </card>
      </template>
    </div>
    <div id="divider" v-if="isOverScreen">
      <divider>我是有底线的</divider>
    </div>
  </div>
</template>
<i18n>
  付款金额:
  en: Total
  标题标题:
  en: Item Title
  商品:
  en: Product
  很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字:
  en: Long Long Long Long Long Long Long Long Long Long Long Long Content
  名字名字名字:
  en: Name Name
  电动打蛋机:
  en: Item title
  辅助操作:
  en: Info
  操作:
  en: Action
  点击事件:
  en: Click Event
  跳转到首页:
  en: Homepage
</i18n>
<script>
  import {Card, Divider} from 'vux'
  
  export default {
    name: "activities",
    components: {
      Card,
      Divider
    },
    data() {
      return {
        isOverScreen: false,
        list: [
          {
            id: 10,
            title: '上海双十一线下快闪',
            value: '电动打蛋机',
            price: 10,
            status: 0
          },
          {
            id: 11,
            title: '上海双十一线下快闪(24号字)',
            value: '名字名字名字',
            price: 20,
            status: 1
          },
          {
            id: 12,
            title: '上海双十一线下快闪',
            value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
            price: 0,
            status: 0
          },
          {
            id: 12,
            title: '上海双十一线下快闪',
            value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
            price: 0,
            status: 0
          },
          {
            id: 12,
            title: '上海双十一线下快闪',
            value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
            price: 0,
            status: 0
          },
        ],
        // buttons1: [{
        //   style: 'default',
        //   text: '辅助操作'
        // }, {
        //   style: 'primary',
        //   text: this.$t('跳转到首页'),
        //   link: '/'
        // }],
        buttons: [ {
          style: 'primary',
          text: this.$t('查看详情'),
          onButtonClick: (name) => {
            alert(`clicking ${name}`)
          }
        } ]
      }
    },
    method:{
      toDetails(){
        this.$route.push('')
      }
    },
    mounted() {
      const that = this;
      console.log(window.innerHeight - 46);
      if ( that.$refs.activities.offsetHeight> window.innerHeight - 46 ) {
        this.isOverScreen = true
      } else {
        this.isOverScreen = false
        
      }
    }
  }
</script>

<style scoped lang="stylus">
  #activities
    padding-top: 10px
  
  #activities >>> .weui-panel
    position: relative
    overflow inherit
    box-shadow 0 5px 15px rgba(0, 0, 0, 0.6)
    
    .weui-panel__hd
      font-size: 1.6rem
    
    .imgWrapper
      position: absolute
      top: -2px
      right: 20px
      width: 17%
  
  #activities >>> .doing
    border-top: 1px solid red
    h2
      color: red
  
  #activities >>> .finish
    border-top: 1px solid #229fdd
    
    h2
      color: #229fdd

</style>
