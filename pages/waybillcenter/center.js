 // pages/waybillcenter/center.js
var app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ["全部订单", "装货中", "配送中", "已完成"],
    currentData: 0,
    isCheckd: false,
    latitude: "",
    longitude: "",
    latitude1: "",
    longitude1: "",
    list: [{
        time: "10-22 10:30",
        distance: "1.0",
        start: "广东深圳",
        end: "湖北武汉",
        freight: "540",
      },
      {
        time: "10-28 11:30",
        distance: "10.0",
        start: "陕西西安",
        end: "湖北武汉",
        freight: "3000",
      }
    ],
    markers: [{
        iconPath: "../../images/pos_fa.png",
        id: 0,
        latitude: 34.22259,
        longitude: 108.94878,
        width: 40,
        height: 40
      },
      {
        iconPath: "../../images/pos_shou.png",
        id: 1,
        longitude: 108.701855,
        latitude: 34.779778,
        width: 40,
        height: 40
      }
    ],
    markers1: [{
      iconPath: "../../images/pos_shou.png",
      id: 1,
      longitude: 108.701855,
      latitude: 34.779778,
      width: 40,
      height: 40
    }],
    historylist: [{
        num: "46551274412157",
        start_title: "广东深圳",
        start_detail: "南山区科技园南区R2-B三楼步步高",
        end_title: "湖北武汉",
        end_detail: "武昌区水果湖街徐东路50号",
        freight: "660",
        status: "0",
        img: ""
      },
      {
        num: "46551274412266",
        start_title: "陕西西安",
        start_detail: "西安市雁塔区唐兴路6号唐兴数码4楼",
        end_title: "广东深圳",
        end_detail: "南山区科技园南区R2-B三楼步步高",
        freight: "880",
        status: "1",
        img: ""
      },
      {
        num: "46551274412668",
        start_title: "广东深圳",
        start_detail: "南山区科技园南区R2-B三楼步步高",
        end_title: "湖北武汉",
        end_detail: "武昌区水果湖街徐东路50号",
        freight: "880",
        status: "0",
        img: ""
      }
    ],
    polyline: [{
      points: [{
          latitude: 34.22259,
          longitude: 108.94878
        },
        {
          longitude: 108.701855,
          latitude: 34.779778
        }
      ],
      color: "#ff6600",
      width: 2,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }]
  },
  // 打电话
  ringup(e) {
    console.log("打电话")
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: '0000000' //模拟号码
    })
  },
  // 点击tabbar切换页面
  change(e) {
    // console.log(e.target.dataset.current)
    // console.log(e)
    var _this = this
    if (_this.data.currentData == e.target.dataset.current) {
      this.setData({
        isCheckd: true
      })
      return
    } else {
      this.setData({
        currentData: e.target.dataset.current,
        isCheckd: false
      })
    }
  },
  // 滑动页面切换tabbar
  bindchange(e) {
    var that = this;
    this.setData({
      currentData: e.detail.current
    })

  },
  // 接单
  getorder() {
    var token = app.globalData.token
    wx.request({
      url: 'http://192.168.1.105:9090/weChat/orderReceiving',
      data: {},
      header: { "Content-Type": "application/json", "token": token },
      method: 'post',
      success(res) {
        if(res.data.code==200){
          wx.showToast({
            title: res.data.data,
          })
        }
      }
    })
  },
  // 取消订单n
  cancel() {
    var token = app.globalData.token
    wx: wx.showModal({
      title: '确定取消订单?',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#15af7d',
      confirmText: '确定',
      confirmColor: '#15af7d',
      success: function(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://192.168.1.105:9090/weChat/cancellationOrder',
            data:{},
            header: { "Content-Type": "application/json", "token": token },
            method:"post",
            success(res){
              if(res.data.code==200){
                wx.showToast({
                  title: res.data.data,
                })
              }
            }
          })
        }
        else {
          console.log("用户点击了取消")
        }
      },

    })
  },
  // 确认装货
  confirm() {
    var token = app.globalData.token
    wx.request({
      url: 'http://192.168.1.105:9090/weChat/confirmLoading',
      data:{},
      header: { "Content-Type": "application/json", "token": token },
      method:'post',
      success(res){
        if(res.data.code==200){
          wx.showToast({
            title: res.data.data,
          })
        }
      }
    })
  },
  //确认收货
  receipt() {
    var token = app.globalData.token
    wx.request({
      url: 'http://192.168.1.105:9090/weChat/confirmReceipt',
      data:{},
      header: { "Content-Type": "application/json", "token": token },
      method:'post',
      success(res){
        if(res.data.code==200){
          wx.showToast({
            title: res.data.data,
          })
        }
      }
    })
  },
  // 上传运单
  uploading(e) {
    var token = app.globalData.token
    // console.log(e.currentTarget.dataset.index)
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
        console.log(tempFilePaths)
        that.setData({
          tempFilePaths: tempFilePaths

        })
        // for (var i = 0; i < that.data.historylist.length;i++) {
        //   // console.log(that.data.historylist)
        //   // console.log(e.currentTarget.dataset.index)
        //   // console.log(i)
        //   if(e.currentTarget.dataset.index==i){
        //     this.setData({
        //      historylist.img:
        //     })
        //   }else{
        //     console.log(2)
        //   }
        // }
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          //上传文件
          wx.uploadFile({
            url: 'http://192.168.1.105:9090/weChat/uploadReceipt',//这里输入你的接口路径
            filePath: tempFilePaths[i],//上面的文件路径
            name: 'img',//这个需要找后台拿，传入服务器的名字
            data: { 'token': token, 'waybillId': waybillId, 'file': file},
            header: {
              "Content-Type": "multipart/form-data","token":token
            },
            success: function (res) {
              console.log("k",res)
            },
            fail: function (res) {
              wx.hideToast();
              wx.showModal({
                title: '错误提示',
                content: '上传图片失败',
                showCancel: false,
                success: function (res) {

                }
              })
            }
          });
        }

      }
    })
  },
  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function(e) {
    let index = e.target.dataset.index;
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
    })
  },
  /**
   * 长按删除图片
   */
  deleteImage: function(e) {
    var that = this;
    var tempFilePaths = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index; //获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function(res) {
        if (res.confirm) {
          console.log('点击确定了');
          tempFilePaths.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          tempFilePaths
        });
      }
    })
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  moveToLocation1: function() {
    this.mapCtx1.moveToLocation()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.mapCtx = wx.createMapContext('myMap')
    this.mapCtx1 = wx.createMapContext('myMap1')
    this.moveToLocation1()
    var that = this
    //获取当前的地理位置、速度
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res) {
        console.log(res)
        //赋值经纬度
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          latitude1: res.latitude,
          longitude2: res.longitude,
        })
      }
    })
    var token=app.globalData.token
    console.log(token)
    wx.request({
      url: 'http://192.168.1.105:9090/weChat/waybill',
      data:{},
      header: { "Content-Type": "application/text","token":token},
      method:'post',
      success(res){
        console.log(res)
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