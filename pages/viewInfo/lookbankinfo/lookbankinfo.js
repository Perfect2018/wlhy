var app=getApp()
var utils = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ind:"",
    bank: []
  },

  lookdetail(e){
    if(this.data.ind==e.currentTarget.dataset.index){
      this.setData({
        ind: 0.1
      })
    }else{
      this.setData({
        ind: e.currentTarget.dataset.index
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var token = app.globalData.token;
    var that = this;
    wx.request({
      url: utils.baseUrl+'/weChat/payee',
      data: {},
      header: {
        "Content-Type": "application/json",
        "token": token
      },
      method: 'post',
      success(res){
        that.setData({
          bank:res.data.data
        })
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