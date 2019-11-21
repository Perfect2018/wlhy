// pages/viewInfo/viewInfo.js\
var utils = require('../../utils/util.js')
var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    exist:false,
    bankNum:false,
    idCardIcon1:"../../images/sfz_z.png",
    idCardIcon2:"../../images/sfz_f.png",
    driverIcon1:"../../images/jsz_z.png",
    driverIcon2:"../../images/sfz_f.png",
    type:"",
    idCard:"",
    name:"",
    idCardImg:"",
    idCardBackImg:"",
    driverImg:"",
    driverBackImg:"",
    phone:"",
    carCard:'',
    banknum:'',
    typeDetail:""
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
    var that=this;
    var token=app.globalData.token
    wx.request({
      url: utils.baseUrl +'weChat/driver',
      data:{},
      header: { "Content-Type": "application/json", "token": token },
      method:'post',
      success(res){
        // console.log(res)
        that.setData({
          idCard:res.data.data.driverUser.idCard,
          name:res.data.data.driverUser.name,
          type: 1,
          idCardImg: res.data.data.driver.idCardImg,
          idCardBackImg: res.data.data.driver.idCardBackImg,
          driverImg: res.data.data.driver.driverImg,
          driverBackImg: res.data.data.driver.driverBackImg,
          phone:res.data.data.driver.phone
        })
      }
    })
    wx.request({
      url: utils.baseUrl +'weChat/truck',
      data: {},
      header: { "Content-Type": "application/json", "token": token },
      method: 'post',
      success(res){
        that.setData({
          carCard:res.data.data.truckNo
        })
      }
    })
    wx.request({
      url: utils.baseUrl+'weChat/payee',
      data: {},
      header: { "Content-Type": "application/json", "token": token },
      method: 'post',
      success(res){
        that.setData({
          banknum:res.data.data[0].idCard
        })
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