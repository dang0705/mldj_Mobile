<template>
  <div id="activities">
    <template
      v-for="(item,i) in list"
    >
      <!--<form-preview-->
      <!--:header-label="item[0].label"-->
      <!--:body-items="list[i]"-->
      <!--:footer-buttons="buttons"-->
      <!--name="demo">-->
      <!--</form-preview>-->
      <card
        :header="{title:item.label}"
        :footer="{title: '查看更多',link:'/component/activityDetail.vue'}">
        <p slot="content" class="card-padding">{{ item.value }}</p>
      </card>
    </template>
    <divider>我是有底线的</divider>
  </div>
</template>
<!--<i18n>
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
</i18n>-->
<script>
  import {FormPreview} from 'vux'
  import {Divider, Card} from 'vux'
  
  export default {
    name: "activities",
    components: {
      // FormPreview,
      Divider,
      Card
    },
    data() {
      return {
        list: [
          {
            label: '商品',
            value: '电动打蛋机'
          },
          {
            label: '标题标题',
            value: '名字名字名字'
          },
          {
            label: '标题标题',
            value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
          }
          ,
          // [
          //   {
          //     label: '商品1',
          //     value: '电动打蛋机1'
          //   },
          //   {
          //     label: '标题标题1',
          //     value: '名字名字名字1'
          //   },
          //   {
          //     label: '标题标题1',
          //     value: '很长很长'
          //   }
          // ],
          // [
          //   {
          //     label: '商品2',
          //     value: '电动打蛋机2'
          //   },
          //   {
          //     label: '标题标题2',
          //     value: '名字名字名字2'
          //   },
          //   {
          //     label: '标题标题2',
          //     value: '很长很长2'
          //   }
          // ],
        ],

        // buttons: [ {
        //   style: 'primary',
        //   text: this.$t('查看详情'),
        //   onButtonClick: (name) => {
        //     alert(`clicking ${name}`)
        //   }
        // } ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
