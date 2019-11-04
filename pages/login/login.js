// pages/login/login.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelect: true
  },
  select() {
    this.setData({
      isSelect: !this.data.isSelect
    })
  },
  formsubmit(e) {
    var user = e.detail.value.username;
    var pwd = e.detail.value.password;
    if (user == '' || pwd == '') {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
      })
    } else {
      wx.showLoading({
        title: '登录中',
      })
      wx.request({
        url: 'http://192.168.1.105:9090/weChat/login',
        data: {
          loginName: user,
          password: pwd
        },
        method: 'post',
        success(res) {
          console.log(res)
          if (res.data.code == 200) {
            wx.hideLoading()
            wx.showToast({
              title: '登录成功',
              icon: 'none'
            })
            getApp().globalData.token=res.data.data.token
            console.log(app.globalData.token)
            wx.reLaunch({
              url: '../waybillcenter/center',
            })
          } else {
            wx.showToast({
              title: '用户名密码错误',
              icon: 'none'
            })
          }
        }
      })
    }
    // wx.login({
    //   success(res){
    //     if(res.code){
    //       if (user == '' || pwd == ''){
    //         wx.showToast({
    //           title: '用户名或密码不能为空',
    //           icon: 'none',
    //         })
    //       }else{
    //         wx.request({
    //           url: 'http://192.168.102:9090/weChat/login',
    //           data: {
    //             loginName: user,
    //             password: pwd,
    //             code:res.code
    //           },
    //           method:'post',
    //           success(res){
    //             console.log(res)
    //             if(res.data.code==200){
    //               wx.showToast({
    //                 title: '登录成功',
    //                 icon:'none'
    //               })
    //               wx.reLaunch({
    //                 url: '../waybillcenter/center',
    //               })
    //             }else{
    //               wx.showToast({
    //                 title: res.data.message,
    //                 icon:'none'
    //               })
    //             }
    //           }
    //         })
    //       }
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})