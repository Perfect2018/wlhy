//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '一个让您放心的网络货运平台',
    active:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    money:'1000.18'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 我要报账 
  submit(){
    wx.navigateTo({
      url:'../billingInfo/billingInfo'
    })
  },
  // 获取用户信息
  // getUserInfo: function (e) {
  //   console.log(e)     
  //   // console.log(11)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  onLoad: function () {
    // var that=this
    // wx.getSetting({
    //   success:(res)=>{
    //     if(res.authSetting['scope.userInfo']==true){
    //       that.getUserInfo()
    //     }else{
    //       console.log("未授权部分功能受限")
    //     }
    //   }
    // })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
