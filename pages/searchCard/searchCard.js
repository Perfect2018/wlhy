// pages/searchCard/searchCard.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    res: {
      data: "612430199910210918"
    }
  },
  // 获取输入框的值
  expInput: function(e) {
    var num = e.detail.value
    this.setData({
      num: e.detail.value
    })
    // console.log(num)
  },
  next() {
    var _num = this.data.num;
    if (this.data.res.data !== _num) {
      wx.showModal({
        title: '暂未签约',
        content: '是否去签约',
        cancelText: '否',
        confirmText: '是',
        confirmColor: '#15af7d',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../accept/accept',
            })
          } else {
            console.log("点击取消按钮")
          }
        }
      })
    } else {
      wx.showModal({
        title: '你已完成签约',
        content: '是否前往查看',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../acceptcontract/acceptcontract',
            })
          } else {
            console.log('取消')
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var token = app.globalData.token
    wx.request({
      url: 'http://192.168.1.105:9090/weChat/signed',
      data:{},
      header: { "Content-Type": "application/json", "token": token },
      method:'post',
      success(res){
        console.log(res)
      }
    })
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