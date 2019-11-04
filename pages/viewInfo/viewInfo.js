// pages/viewInfo/viewInfo.js\
var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    exist:false,
    bankNum:false,
    type:false,
    num:'1111222255556666888',
  },
  addCarInfo(){
    wx.navigateTo({
      url: '../certification/car/car',
    })
  },
  addBankInfo(){
    wx.navigateTo({
      url: '../certification/bank/bank',
    })
  },
  // 编辑按钮
  // edit(){
  //   wx.navigateTo({
  //     url: '../certification/car/car',
  //   })
  // },
  lookcarinfo(){
    wx.navigateTo({
      url: './lookcarinfo/lookcarinfo',
    })
  },
  lookbankinfo(){
    wx.navigateTo({
      url: './lookbankinfo/lookbankinfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var token=app.globalData.token
    wx.request({
      url: 'http://192.168.1.105:9090/weChat/driver',
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