// pages/home/home.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    has:true,
    name:"",
    avatar:"",
  },
 
  lookContract(){
    wx:wx.navigateTo({
      url: '../searchCard/searchCard',
    })
  },
  goViewInfo(){
    if(this.data.has){
      wx.navigateTo({
        url: '../viewInfo/viewInfo',
      })
    }else{
      wx.navigateTo({
        url: '../certification/certification',
      })
    }
  },
  complain(){
    wx.navigateTo({
      url: '../complain/complain',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: app.globalData.userInfo.name,
      avatar: app.globalData.userInfo.avatar
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})