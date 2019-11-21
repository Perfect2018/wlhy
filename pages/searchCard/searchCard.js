// pages/searchCard/searchCard.js
var utils = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
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
    var token = app.globalData.token;
    var reg = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
    if (_num == "") {
      wx.showToast({
        title: '输入内容不能为空',
        icon: "none"
      })
    } else if(reg.test(_num)===false)
    {
      wx.showToast({
        title: '身份证号码格式错误',
        icon:"none"
      })
    }else{
      wx.request({
        url: utils.baseUrl + 'weChat/signed',
        data: {},
        header: {
          "Content-Type": "application/json",
          "token": token
        },
        method: 'post',
        success(res) {
          if (res.data.code == 200) {
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
          } else {
            wx.showToast({
              title: '请尽快完成签约',
              icon: "none"
            })
          }
        }
      })
    }
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