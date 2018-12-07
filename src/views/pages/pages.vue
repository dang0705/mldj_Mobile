<template>
  <div id="home">
    <Tabbar>
      <Tabbar-item @on-item-click="handler"></Tabbar-item>
    </Tabbar>
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
    methods: {
      handler() {
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
