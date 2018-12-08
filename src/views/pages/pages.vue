<template>
  <div id="home">
    <!--<tabbar>-->
      <!--<tabbar-item @on-item-click="handler">-->
        <!--<span slot="label">活动</span>-->
      <!--</tabbar-item>-->
      <!--<tabbar-item show-dot @on-item-click="handler" badge="2">-->
        <!--<span slot="label">消息</span>-->
      <!--</tabbar-item>-->
      <!--<tabbar-item @on-item-click="handler">-->
        <!--<span slot="label">我的</span>-->
      <!--</tabbar-item>-->
    <!--</tabbar>-->
    <tabbar>
      <tabbar-item>
        <img slot="icon" :src="iconUrl+'/activity.png'">
      </tabbar-item>
      <tabbar-item show-dot  badge="2">
        <img slot="icon" :src="iconUrl+'/message.png'">
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" :src="iconUrl+'/my.png'">
      </tabbar-item>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vux'
  
  export default {
    name: "page",
    components: {
      Tabbar,
      TabbarItem
    },
    data(){
      return{
        iconUrl:'static/icon'
      }
    },
    methods: {
      handler() {
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
