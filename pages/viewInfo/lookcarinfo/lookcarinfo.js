// pages/viewInfo/lookcarinfo/lookcarinfo.js
var utils = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carnum: "",
    color: "",
    drivingimg: "",
    weight: "",
    length: "",
    type: "",
    wayimg: "",
    groupphoto: "",
    insurance: ""
  },
  // 道路运输证照片
  transportation(e) {
    let index = e.target.dataset.index;
    console.log(e)
    let that = this;
    wx.previewImage({
      current: that.data.carinfo.wayimgs[index],
      urls: that.data.carinfo.wayimgs,
    })
  },
  // 人车合影照片
  groupPhoto(e) {
    let index = e.target.dataset.index;
    console.log(index)
    let that = this;
    wx.previewImage({
      current: that.data.carinfo.groupphoto[index],
      urls: that.data.carinfo.groupphoto,
    })
  },
  // 保险卡照片
  insurance(e) {
    let index = e.target.dataset.index;
    console.log(index)
    let that = this;
    wx.previewImage({
      current: that.data.carinfo.insurance[index],
      urls: that.data.carinfo.insurance,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var token = app.globalData.token;
    var that = this;
    wx.request({
      url: utils.baseUrl+'weChat/truck',
      data: {},
      header: {
        "Content-Type": "application/json",
        "token": token
      },
      method: 'post',
      success(res) {
        console.log(res)
        that.setData({
          carnum: res.data.data.truckNo,
          color: res.data.data.color,
          drivingimg: res.data.data.travelImg,
          weight: res.data.data.weight,
          length: res.data.data.length,
          type: res.data.data.typeName,
          wayimg: res.data.data.transportImg,
          groupphoto: res.data.data.truckImg,
          insurance: res.data.data.insuranceImg
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