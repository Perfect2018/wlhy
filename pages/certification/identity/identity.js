// pages/certification/identity/identity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isUpload:true,
    isUpload1:true,
  },
  front: function () {
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
        let ftempFilePaths = res.tempFilePaths;

        that.setData({
          tempFilePaths1: ftempFilePaths,
          isUpload:false
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
  // 身份证背面
  reverse: function () {
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
        let rtempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths2: rtempFilePaths,
          isUpload1: false
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
  // 提交认证
  commit(){
    if(false){
      wx.showModal({
        title: '正在上传',
        content: '请稍等...',
        success: function (res) {
          console.log(res)
        }
      })
    }else{
      wx.showModal({
        title: '上传失败',
        content: '请检查网络是否正常',
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