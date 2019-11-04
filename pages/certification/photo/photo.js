// pages/certification/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    isNull:true
  },
  // 拍照
  photograph(){
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;

        that.setData({
          tempFilePaths: tempFilePaths,
          isNull:false
        })
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        // for (var i = 0, h = tempFilePaths.length; i < h; i++) {
        //   //上传文件
        //   wx.uploadFile({
        //     // url: app.URL,//这里输入你的接口路径
        //     filePath: tempFilePaths[i],//上面的文件路径
        //     name: 'img',//这个需要找后台拿，传入服务器的名字
        //     header: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //     success: function (res) {
        //       console.log("k",res)
        //     },
        //     fail: function (res) {
        //       wx.hideToast();
        //       wx.showModal({
        //         title: '错误提示',
        //         content: '上传图片失败',
        //         showCancel: false,
        //         success: function (res) {

        //         }
        //       })
        //     }
        //   });
        // }

      }
    })
  },
  // 上传
  commit(){
    // wx:wx.request({
    //   url: '',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    wx.showLoading({
      title: '上传中',
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