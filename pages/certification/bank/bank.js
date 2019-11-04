// pages/certification/bank/bank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    number:'',
    bank:'',
    idcard:'',
    phone:''
  },
  getName(e){
    console.log(e)
    this.setData({
      name:e.detail.value
    })
    
  },
  getNum(e){
    this.setData({
      number:e.detail.value
    })
  },
  getBank(e){
    this.setData({
      bank:e.detail.value
    })
  },
  getCard(e) {
    this.setData({
      idcard:e.detail.value
    })
  },
  getPhone(e) {
    this.setData({
      phone:e.detail.value
    })
  },
  save(){
    console.log(this.data.name)
    if(this.data.name==''){
      wx.showToast({
        title: '请输入开户姓名',
        icon: 'none'
      })
    }else if(this.data.number==''){
      wx.showToast({
        title: '请输入银行卡号',
        icon: 'none'
      })
    }else if(this.data.bank==''){
      wx.showToast({
        title: '请输入开户银行',
        icon:'none'
      })
    }else if(this.data.idcard==''){
      wx.showToast({
        title: '请输入身份证号',
        icon:'none'
      })
    }else if(this.data.phone==''){
      wx.showToast({
        title: '请输入联系电话',
        icon:'none'
      })
    }
    
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