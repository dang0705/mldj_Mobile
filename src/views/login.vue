<template>
  <div id="login">
    <div id="imgWrapper">
      <img width="100%" src="../../static/logo.png" alt="">
    </div>
    <x-input title="" placeholder="用户名" required v-model="userName">
      <img class="inputImg" slot="label"
           style="display:block;"
           src="../../static/userName.png" width="40" height="40">
    </x-input>
    <x-input title="" placeholder="密码" type="password" required v-model="password">
      <img class="inputImg" slot="label"
           style="display:block;"
           src="../../static/password.png" width="40" height="40">
    </x-input>
    <div>
      <img id="titleImg" width="100%" src="../../static/loginTitle.png" @click="login" alt="">
    </div>
    <!--<confirm
      v-model="show6"
      :show-cancel-button="false"
      :title="$t('Confirm deleting the item')"
      @on-confirm="onConfirm">
      <p style="text-align:center;">{{ $t('Are you sure?') }}</p>
    </confirm>-->
  </div>
</template>

<script>
  import {XInput, Group} from 'vux'
  import md5 from 'md5'
  const storage=window.localStorage;
  export default {
    name: "login",
    components: {
      XInput,
      Group,
    },
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      login() {
        if ( !this.userName ) {
          this.$vux.confirm.show({
            title: '用户名不能为空'
          });
          return
        } else if ( !this.password ) {
          this.$vux.confirm.show({
            title: '密码不能为空'
          });
          return
        }
        const that = this;
        that.$axios.post('/Account/Login', {
          UserName: this.userName,
          UserPwd: md5(this.password),
          ValidateCode: '59898989'
        }).then(data => {
          if ( data.data.state === 1 ) {
            const userInfo=data.data.Content.UserInfo;
            storage.setItem('EmployeeCode',userInfo.EmployeeCode);
            storage.setItem('roleID',userInfo.RoleID);
            that.$router.push('/pages')
          } else {
            that.$vux.confirm.show({
              title: data.msg
            });
          }
        })
      },
      
    }
  }
</script>

<style scoped lang="stylus">
  #login
    height 100%
    padding-top 30%
    background #241614
    
    #imgWrapper
      width 50%
      margin 0 auto 5vh
    
    >>> .weui-input
      /*background #fff*/
      background transparent
      height: 40px
      line-height: 40px
      border: 1px solid #931f25
      color #fff
    
    >>> .weui-cell
      position static
      width 80%
      margin 0 auto
      
      .inputImg
        background #931f25
    
    #titleImg
      margin-top: 5vh
</style>
