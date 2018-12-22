<template>
  <div id="activities">
    <div ref="activities">
      <template
        v-for="(item,i) in list"
      >
        <card
          :footer="{title:'活动详情',link:'/details/'+JSON.stringify({
            id:item.ID,
            tid:item.stid,
            ApprovalStataus:item.ApprovalStataus,
            StepStataus:item.StepStataus
          })}"
          :class="activityStatus(item.ApprovalStataus,item.StepStataus)"
          ref="card"
        >
          <h2 slot="content">{{item.ActivityName}}</h2>
          <div slot="content" class="imgWrapper">
            <img width="100%" class="statusImg" :src="imgSrc(item.ApprovalStataus,item.StepStataus)" alt="">
          </div>
          <p slot="content" class="activityCode">{{item.ActivityCode}}</p>
          <div slot="content" class="time">
            <span slot="content">时间：</span>
            <span slot="content" class="timeDetails">{{item.OpenStartDate}}-</span>
            <span slot="content" class="timeDetails">-{{item.OpenEndDate}}</span>
          </div>
          <div slot="content" class="store">
            <span slot="content">门店：</span>
            <span slot="content" class="add">{{item.ShopName}}</span>
          </div>
          <!--    <div slot="content" class="step">
				<span slot="content" v-text="StepStataus(item.StepStataus)"></span>
			  </div>-->
          <!--<p slot="content" @click="toDetails(item.id)">查看详情</p>-->
        </card>
      </template>
    </div>
    <div id="divider" v-if="isOverScreen">
      <divider>我是有底线的</divider>
    </div>
  </div>
</template>

<script>
  import {Divider, Card} from 'vux'
  
  const storage = window.localStorage;
  export default {
    name: "activities",
    components: {
      Divider,
      Card
    },
    data() {
      return {
        isOverScreen: false,
        list: [],
      }
    },
    methods: {
      getList() {
        const that = this;
        that.$axios.post('/home/onloadActivitywithEmp', {
          EmployeeCode: storage.getItem('EmployeeCode')
        }).then(data => {
          console.log(data);
          that.list = data.data.Content;
        })
      }
      ,
      activityStatus(ApprovalStataus, StepStataus) {
        let className;
        if ( ApprovalStataus == 3 ) {
          className = 'finish';
        } else {
          if ( StepStataus == 1 ) {
            className = 'unDoing';
          } else {
            className = 'doing';
          }
        }
        return className
      },
      
      imgSrc(ApprovalStataus, StepStataus) {
        let src;
        if ( ApprovalStataus == 3 ) {
          src = 'static/finish.png';
        } else {
          if ( StepStataus == 1 ) {
            src = 'static/unDoing.png';
          } else {
            src = 'static/doing.png';
          }
        }
        
        return src
      },
      /*      StepStataus(StepStataus) {
			  let text;
			  if ( StepStataus === 1 ) {
				text = '等待执行';
			  } else if ( StepStataus === 100 ) {
				text = '未执行';
			  } else if ( 2 ) {
				text = '已执行'
			  }
			  return text
			}*/
    },
    mounted() {
      this.getList();
      if ( this.$refs.activities.offsetHeight + 50 > window.innerHeight - 46 ) {
        this.isOverScreen = true
      } else {
        this.isOverScreen = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  
  
  #activities
    background #eee
    >>> .weui-panel
      position: relative
      overflow inherit
      box-shadow 0 5px 15px rgba(0, 0, 0, 0.6)
      padding 3% 5%
    
    .time, .store, .step
      height 5vh
      line-height 5vh
    
    .weui-panel__hd
      font-size: 1.6rem
    
    .imgWrapper
      position: absolute
      top: -2px
      right: 20px
      width: 17%
    
    .activityCode, .timeDetails, .add
      color #9c9c9c
    
    .weui-cell_link
      font-size: 2rem;
  
  #activities >>> .unDoing
    border-top: 1px solid #00aa80
    
    h2
      color: #00aa80
      font-size 2rem
  
  #activities >>> .doing
    border-top: 1px solid #ff005c
    
    h2
      color: #ff005c
      font-size 2rem
  
  #activities >>> .finish
    border-top: 1px solid #229fdd
    
    h2
      color: #229fdd
      font-size 2rem
</style>
