// pages/certification/certification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    active1:"selected",
    active2: "select",
    labelText:"本人实名手机号",
    type:true,
    number:''
  },

  close(){
   this.setData({
     isShow:false
   })
  },
  phoneNum(){
    this.setData({
      active1:"selected",
      active2:"select",
      labelText: "本人实名手机号",
      type:true,
    })
  },
  groupPhoto(){
    this.setData({
      active2:"selected",
      active1:"select",
      labelText: "人证合照",
      type:false,
    })
  },
  getPhoneNum(e){
    var _this=this;
    this.setData({
      number:e.detail.value
    })
    // console.log(this.data.number)
    if(this.data.number!=123456789){
      wx.showModal({
        title: '手机实名认证失败！',
        content: '身份证、姓名和手机号必须为同一人',
        cancelText:'检查信息',
        confirmText:'人证合照',
        confirmColor:'#15af7d',
        success(res){
          if(res.confirm){
            _this.groupPhoto()
          }
        }
      })
    }
  },
  goIdentity(){
    wx.navigateTo({
      url: './identity/identity',
    })
  },
  goDriving(){
    wx.navigateTo({
      url: './driving/driving',
    })
  },
  goPhoto(){
    wx.navigateTo({
      url: './photo/photo',
    })
  },
  addCar(){
   wx.showLoading({
     title: '添加中',
   })
  },
  addBankCard(){
    wx.showToast({
      title: '添加银行卡',
    })
  },
  commit(){
    wx.showToast({
      title: '提交中...',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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