<template>
  <div id="home">
    <x-header
      :left-options="{showBack:isShowBack}"
      @on-click-back="onBack"
      :title="pageTitle"
    ></x-header>
    <router-view></router-view>
    <tabbar
      @on-index-change="tabChange"
    >
      <tabbar-item selected link="/activities">
        <img slot="icon" :src="iconUrl+'/activity.png'" alt="">
        <img slot="icon-active" :src="activeIconUrl+'/activity.png'" alt="">
      </tabbar-item>
      <tabbar-item badge="2" link="/message">
        <img slot="icon" :src="iconUrl+'/message.png'" alt="">
        <img slot="icon-active" :src="activeIconUrl+'/message.png'" alt="">
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" :src="iconUrl+'/my.png'" alt="">
        <img slot="icon-active" :src="activeIconUrl+'/my.png'" alt="">
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem,
    XHeader
  } from 'vux'
  
  export default {
    name: "page",
    components: {
      Tabbar,
      TabbarItem,
      XHeader
    },
    data() {
      return {
        iconUrl: 'static/icon',
        activeIconUrl: 'static/icon_active',
        isShowBack: false,
        pageTitle: '活动列表'
      }
    },
    watch: {
      // '$store.state.isShowBack': function () {
      //   this.isShowBack = this.$store.state.isShowBack;
      // },
      '$route.name': function () {
        const name=this.$route.name
        
        if ( name === 'activities' || name === 'message' || name === 'my' ) {
          this.isShowBack = false
        } else {
          this.isShowBack = true
        }
        
        switch (name) {
          case 'details':
            this.pageTitle ='活动详情';
            break;
          case 'activities':
            this.pageTitle ='活动列表';
            break;
          case 'message':
            this.pageTitle ='消息';
            break;
          case 'my':
            this.pageTitle ='我的';
            break;
  
        }
        
      }
    },
    methods: {
      tabChange(val) {
        console.log(val);
        const that = this;
        switch (val) {
          case 0:
            that.pageTitle = '活动列表';
            break;
          case 1:
            that.pageTitle = '消息';
            break;
          default:
            that.pageTitle = '我的';
            break;
          
        }
      },
      onBack(val1, val2, val3) {
        console.log(val1, val2, val3);
      }
    },
    mounted() {
      console.log(this.$route);
      this.$router.push('/activities')
      console.log('回首页');
    }
  }
</script>

<style scoped lang="stylus">

</style>
