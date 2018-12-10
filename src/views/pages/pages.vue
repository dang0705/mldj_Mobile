<template>
  <div id="home">
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="/activities">
        <img slot="icon" :src="iconUrl+'/activity.png'" alt="">
        <img slot="icon-active" :src="iconUrl+'/message.png'" alt="">
      </tabbar-item>
      <tabbar-item badge="2" link="/message">
        <img slot="icon" :src="iconUrl+'/message.png'" alt="">
        <img slot="icon-active" :src="iconUrl+'/activity.png'" alt="">
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" :src="iconUrl+'/my.png'" alt="">
        <img slot="icon-active" :src="iconUrl+'/activity.png'" alt="">
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
