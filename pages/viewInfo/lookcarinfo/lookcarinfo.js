// pages/viewInfo/lookcarinfo/lookcarinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carinfo:{
      carnum:"京A66666",
      color:"白色",
      drivingimgs: ["../../../images/sfz_z.png", "../../../images/sfz_f.png"],
      weight:"10t",
      length:"10m",
      type:"解放",
      wayimgs: ["../../../images/sfz_z.png", "../../../images/sfz_f.png"],
      groupphoto: ["../../../images/sfz_z.png", "../../../images/sfz_f.png"],
      insurance: ["../../../images/sfz_z.png", "../../../images/sfz_f.png"]
    }
  },
  transportation(e){
    let index = e.target.dataset.index;
    console.log(e)
    let that = this;
    wx.previewImage({
      current: that.data.carinfo.wayimgs[index],
      urls: that.data.carinfo.wayimgs,
    })
  },
  groupPhoto(e){
    let index = e.target.dataset.index;
    console.log(index)
    let that = this;
    wx.previewImage({
      current: that.data.carinfo.groupphoto[index],
      urls: that.data.carinfo.groupphoto,
    })
  },
  insurance(e){
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