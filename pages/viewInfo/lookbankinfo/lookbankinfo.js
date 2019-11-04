Page({

  /**
   * 页面的初始数据
   */
  data: {
    ind:"",
    bank: [{
        user:"小刘",
        name: "中国银行",
        type: "储蓄卡",
        num: "1234432112344321999",
        card:"	110101199003076931",
        tel:"18812346547"
      },
      {
        user: "小明",
        name: "工商银行",
        type: "储蓄卡",
        num: "9632147885230000888",
        card:"110101199003072658",
        tel:"19955555555"
      },
      {
        user: "小张",
        name: "建设银行",
        type: "储蓄卡",
        num: "5897456136981111666",
        card: "110101199003072321",
        tel: "18833333333"
      },
      {
        user: "小李",
        name: "农业银行",
        type: "储蓄卡",
        num: "8974532123652222555",
        card: "110101199003072012",
        tel: "17722222222"
      },
      {
        user: "小白",
        name: "交通银行",
        type: "储蓄卡",
        num: "3214569871233333222",
        card: "110101199003072998",
        tel: "16611111111"
      },
      {
        user: "小王",
        name: "浦发银行",
        type: "储蓄卡",
        num: "3587968866794444111",
        card: "110101199003072345",
        tel: "15500000000"
      },
    ]
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
    console.log(this.data.ind)
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