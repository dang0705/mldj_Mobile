<template>
  <div id="activityDetails">
    <div id="info">
      <div>
        <span class="label">名称：</span>
        <span id="title" class="itemContent">{{list.ActivityName}}</span>
      </div>
      <div>
        <span class="label">编号：</span>
        <span class="itemContent">{{list.ActivityCode}}</span>
      </div>
      <div>
        <span class="label">负责人：</span>
        <span class="itemContent">{{list.EmployeeName}}</span>
      </div>
      <div>
        <span class="label">时间：</span>
        <span class="itemContent">{{list.OpenStartDate}} -</span>
        <span class="itemContent"> {{list.OpenEndDate}}</span>
      </div>
      <div id="store">
        <span class="label">门店：</span>
        <span class="itemContent">{{list.StoreName}}</span>
      </div>
      <div id="product">
        <span class="label" style="vertical-align: top">商品：</span>
        <span class="itemContent" style="display: inline-block">
          <ul>
        	<li v-for="(item,index) in list.SkuList">
            {{(index+1)+' '+item.ProductName}}
          </li>
        	</ul>
        </span>
      </div>
      <div id="device">
        <span class="label" style="vertical-align: top">售卖机：</span>
        <span class="itemContent" style="display: inline-block">
          <ul>
          	<li
              v-for="(item,index) in list.DeviceList"
            >
              {{(index+1)+' '+item.DeviceName}}
            </li>
          	</ul>
        </span>
      </div>
      <div id="desc">
        <span class="label">简介：</span>
        <span class="itemContent">{{list.ActivityDec}}</span>
      </div>
    
    </div>
    <div id="step">
      <div v-for="(item,index) in list.SetpList" style="margin-bottom: 20px;border-bottom: 1px solid #000;">
        <p>{{item.ActivityStepName}}<span style="display: inline-block;float: right;color:red;font-size: 1.3rem" v-text="status(item.StepStataus)"></span></p>
        <p>{{item.EmployeeName}}</p>
        <div class="EachContent" v-for="(sItem,sIndex) in item.SetpLogItemList">
          <p class="logoContent"><span class="label">{{sItem.DateCreated}}</span><span> {{sItem.LogoContent}}</span></p>
        </div>
      </div>
    </div>
    <divider v-if="!isButtonShow">操作确认</divider>
    <div id="buttons" v-if="!isButtonShow">
      <flexbox>
        <flexbox-item>
          <x-button type="primary" @click.native="showFeedBack">反馈</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" @click.native="confirm">执行确认</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    <div>
      
      <div v-transfer-dom style="padding: 5%">
        <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
          <textarea rows="4" cols="40" v-model="text" style="width: 70%;margin: 10%"></textarea>
          <flexbox-item>
            <x-button type="primary" @click.native="feedBack">确认</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn" @click.native="cancel">取消</x-button>
          </flexbox-item>
          <div @click="showHideOnBlur=false">
            <span class="vux-close"></span>
          </div>
        </x-dialog>
      </div>
      
      <!--<div v-transfer-dom>
        <x-dialog v-model="showDialogStyle" hide-on-blur
                  :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
          <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
            <span style="font-size:30px;">HELLO WORLD</span>
            <br>
            <br>
            <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
          </p>
        </x-dialog>
      </div>-->
      
      <!-- <group style="padding-top: 300px">
		 <x-switch v-model="showScrollBox" :title="$t('long long content')"></x-switch>
	   </group>-->
      
      <!--<div v-transfer-dom>
        <x-dialog v-model="showScrollBox" class="dialog-demo">
          <p class="dialog-title">Long content</p>
          <div class="img-box" style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
            <p v-for="i in 20">{{i}}</p>
          </div>
          <div @click="showScrollBox=false">
            <span class="vux-close"></span>
          </div>
        </x-dialog>
      </div>-->
    
    </div>
  </div>
</template>

<script>
  import {
    XButton,
    Box,
    GroupTitle,
    Group,
    Flexbox,
    FlexboxItem,
    Divider,
    XDialog,
    XSwitch,
    TransferDomDirective as TransferDom
  } from 'vux'
  
  const storage = window.localStorage;
  export default {
    name: "activityDetails",
    directives: {
      TransferDom
    },
    components: {
      XButton,
      Box,
      GroupTitle,
      Group,
      Flexbox,
      FlexboxItem,
      Divider,
      XDialog,
      XSwitch
    },
    data() {
      return {
        list: {},
        params:{},
        isButtonShow: false,
        text: '',
        showHideOnBlur: false,
       /* id: this.$route.params.id.id,
        stid: this.$route.params.id.stid,
        ApprovalStataus: this.$route.params.id.ApprovalStataus,
        StepStataus: this.$route.params.id.StepStataus,*/
      }
    },
    methods: {
      isBtnShow() {
        if ( this.params.ApprovalStataus == 2 && this.params.StepStataus == 2 ) {
          this.isButtonShow = true
        }
      },
      getDetails() {
        const that = this;
        that.$axios.post('/home/onloadActivityLog', {
          ActivityID: this.params.id
        }).then(data => {
          console.log(data);
          if ( data.data.state === 1 ) {
            for ( let key in data.data.Content ) {
              that.list = data.data.Content[ 0 ]
            }
          }
        })
      },
      showFeedBack() {
        this.showHideOnBlur = true
        
      },
      feedBack() {
        const that = this;
        that.$axios.post('/home/ActivityExcu', {
          DogType: 'exce_log',
          ID: this.params.tid,
          LogoContent: this.text,
          EmployeeCode: storage.getItem('EmployeeCode')
        }).then(data => {
          if ( data.data.state === 1 ) {
            that.showHideOnBlur = false;
            that.text='';
            that.getDetails()
            
          }
        })
      },
      status(StepStataus) {
        let text;
        if ( StepStataus == 1 ) {
          text = '未执行'
        } else {
          text = '已执行'
        }
        return text
      },
      cancel() {
        this.showHideOnBlur = false;
        this.text='';
      },
      confirm() {
        const that = this;
        that.$axios.post('/home/ActivityExcu', {
          DogType: 'exce',
          ID: this.stid,
        }).then(data => {
          if ( data.data.state === 1 ) {
            that.$router.push('/activities')
          }
        })
        
      }
    },
    mounted() {
      this.params=JSON.parse(this.$route.params.id);
      console.log(JSON.parse(this.$route.params.id));
      this.getDetails();
      this.isBtnShow()
      /*      if ( this.$refs.activities.offsetHeight + 50 > window.innerHeight - 46 ) {
			  this.isOverScreen = true
			} else {
			  this.isOverScreen = false
			}*/
      // this.$store.commit('changeShowBack',true);
      // console.log(this.$store.state.isShowBack);
    }
  }
</script>

<style scoped lang="stylus">
  .dialog-demo {
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }
    
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    
    .img-box {
      height: 350px;
      overflow: hidden;
    }
    
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  
  #activityDetails
    background #fff
    font-size: 1.6rem
    
    #info
      > div
        height 30px
        line-height: 30px
        margin 10px 0
        
        .label
          width 100px
          display inline-block
        
        .itemContent
          color #a6a6a6
        
        #title
          color #ff005c
          font-size 2.2rem
      
      #product, #device
        height auto
    
    #step
      border-top: 1px solid #ff005c
      margin-top 40px
      padding-top 40px
      
      .EachContent
        
        .logoContent
          color #a6a6a6
          margin: 10px 0
          
          span
            display inline-block
            font-size 1.4rem
          
          .label
            margin-right: 30px


</style>
