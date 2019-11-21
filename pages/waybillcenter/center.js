 // pages/waybillcenter/center.js
 var utils = require('../../utils/util.js')
 var app = getApp()
 Page({

   /**
    * 页面的初始数据
    */
   data: {
     currentwaybillId: "",
     navbar: ["全部订单", "装货中", "配送中", "已完成"],
     currentData: 0,
     isCheckd: false,
     waybillId: "",
     orderId: "",
     list: [],
     waylist: [],
     loading: "",
     delivery: "",
     history: [],
     historylist:[],
     markers1: [{
         iconPath: "../../images/pos_fa.png",
         id: 0,
         latitude: 34.22259,
         longitude: 108.94878,
         width: 40,
         height: 40
       },
       {
         iconPath: "../../images/poss_shou.png",
         id: 1,
         longitude: 108.701855,
         latitude: 34.779778,
         width: 40,
         height: 40
       }
     ],
     markers: [{
         iconPath: "../../images/pos_fa.png",
         id: 1,
         longitude: 108.701855,
         latitude: 34.779778,
         width: 40,
         height: 40
       },
       {
         id: 2,
         longitude: 108.94878,
         latitude: 34.22259,
         width: 40,
         height: 40
       }
     ],
     polyline: [{
       points: [{
           latitude: '',
           longitude: ''
         },
         {
           longitude: '',
           latitude: ''
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
  //  数组去重
   unique: function (arr) {
     if(arr.length<2){
       return arr
     }
     for (var i = 0; i < arr.length; i++) {
       for (var j = i + 1; j < arr.length; j++) {
         if (arr[i].id == arr[j].id) {
           arr.splice(j, 1);
           j--;
         }
       }
     }
     return arr
   },
   // 打电话
   //  发货人
   loadringupsend() {
     wx.makePhoneCall({
       phoneNumber: this.data.loading.consignerPhone
     })
   },
   delringupsend() {
     wx.makePhoneCall({
       phoneNumber: this.data.delivery.consignerPhone
     })
   },
   hisringupsend(){
     wx.makePhoneCall({
       phoneNumber: this.data.history.consignerPhone
     })
   },
   //  收货人
   loadringupget() {
     wx.makePhoneCall({
       phoneNumber: this.data.loading.consigneePhone
     })
   },
   delringupget() {
     wx.makePhoneCall({
       phoneNumber: this.data.delivery.consigneePhone
     })
   },
   hisringupget(){
     wx.makePhoneCall({
       phoneNumber: this.data.history.consigneePhone
     })
   },
   // 点击tabbar切换页面
   change(e) {
     // console.log(e.target.dataset.current)
     // console.log(e)
     var that = this
     var token = app.globalData.token
     if (that.data.currentData == e.target.dataset.current) {
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
   //  查询所有订单
   orderAll() {
     var token = app.globalData.token
     var that = this
     //  console.log(token)
     //  查询所有订单
     wx.request({
       url: utils.baseUrl + 'weChat/orderList',
       header: {
         "Content-Type": "application/text",
         "token": token
       },
       method: 'post',
       success(res) {
         that.setData({
           list: res.data.data,
         })
       }

     })
   },
   // 接单
   getorder(e) {
     var that = this;
     var token = app.globalData.token;
     that.setData({
       orderId: e.target.dataset.id
     })
     console.log(e)
     wx.request({
       url: utils.baseUrl + 'weChat/orderReceiving',
       data: {
         "orderId": that.data.orderId
       },
       header: {
         "Content-Type": "application/json",
         "token": token,
       },
       method: 'post',
       success(res) {
         console.log(res)
         if (res.data.code == 200) {
           that.setData({
             list:[],
           })
           that.onLoad()
           wx.showToast({
             title: res.data.message,
           })
         }
       }
     })

   },
   // 拒单n
   cancel(e) {
     var that = this
     var token = app.globalData.token
     that.setData({
       orderId: e.target.dataset.id
     })
     wx.showModal({
       title: '确定取消订单?',
       showCancel: true,
       cancelText: '取消',
       cancelColor: '#15af7d',
       confirmText: '确定',
       confirmColor: '#15af7d',
       success: function(res) {
         if (res.confirm) {
           wx.request({
             url: utils.baseUrl + 'cancellationOrder',
             data: {
               "orderId": that.data.orderId
             },
             header: {
               "Content-Type": "application/json",
               "token": token,
             },
             method: "post",
             success(res) {
               if (res.data.code == 200) {
                 wx.showToast({
                   title: res.data.data,
                 })
               }
               console.log(res)
             }
           })
         } else {
           console.log("用户点击了取消")
         }
       },

     })
   },
   // 确认装货
   confirm() {
     var token = app.globalData.token;
     var that = this;
     wx.request({
       url: utils.baseUrl + 'weChat/confirmLoading',
       data: {
         "waybillId": that.data.waybillId
       },
       header: {
         "Content-Type": "application/json",
         "token": token
       },
       method: 'post',
       success(res) {
         console.log(res)
         if (res.data.code == 200) {
           that.setData({
             list: [],
             loading:[],
             delivery: []
           })
           that.onLoad()
           wx.showToast({
             title: res.data.message,
           })
         }
       }
     })
   },
   //确认收货
   receipt() {
     var token = app.globalData.token;
     var that = this;
     wx.request({
       url: utils.baseUrl + 'weChat/confirmReceipt',
       data: {
         "waybillId": that.data.waybillId
       },
       header: {
         "Content-Type": "application/json",
         "token": token
       },
       method: 'post',
       success(res) {
         if (res.data.code == 200) {
           that.setData({
             list: [],
             loading: [],
             delivery: []
           })
           that.onLoad()
           wx.showToast({
             title: res.data.message,
           })
         }
       }
     })
   },
   // 上传运单
   uploading(e) {
    //  console.log(e)
     var token = app.globalData.token
     // console.log(e.currentTarget.dataset.index)
     let that = this;
     that.setData({
       currentwaybillId: e.target.dataset.waybillid
     })
      // console.log(this.data.currentwaybillId)
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
         /**
          * 上传完成后把文件上传到服务器
          */
         //  var count = 0;
         for (var i = 0, h = tempFilePaths.length; i < h; i++) {
           //上传文件
           wx.uploadFile({
             url: utils.baseUrl + 'weChat/uploadReceipt', //这里输入你的接口路径
             filePath: tempFilePaths[i], //上面的文件路径
             name: 'file', //这个需要找后台拿，传入服务器的名字
             formData: {
               'waybillId': this.data.currentwaybillId
             },
             header: {
               "Content-Type": "multipart/form-data",
               "token": token
             },
             success: function(res) {
              console.log(res.data)
              // that.onLoad()
               wx.showToast({
                 title: '上传成功'
               })
               that.onLoad()
             },
             fail: function(res) {
               wx.hideToast();
               wx.showModal({
                 title: '错误提示',
                 content: '上传图片失败',
                 showCancel: false,
                 success: function(res) {

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
     let imgpath = [];
     let that = this;
     that.setData({
       imgpath:imgpath.push(e.target.dataset.imgpath)
     })
     wx.previewImage({
      //  current: that.data.tempFilePaths[index],
       urls: imgpath,
     })
   },
   /**
    * 长按删除图片
    */
   deleteImage: function(e) {
     var that = this;
     var tempFilePaths = e.target.dataset.imgpath;
     console.log(tempFilePaths)
     var index = e.currentTarget.dataset.index; //获取当前长按图片下标
     wx.showModal({
       title: '提示',
       content: '确定要删除此图片吗？',
       success: function(res) {
         if (res.confirm) {
           that.setData({
             tempFilePaths:[]
           })
           console.log(tempFilePaths)
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
  //  评价
   comment(){
     wx.navigateTo({
       url: '../comment/comment',
     })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
     var token = app.globalData.token
     this.orderAll()
     this.mapCtx = wx.createMapContext('myMap')
     this.mapCtx1 = wx.createMapContext('myMap1')
     this.moveToLocation1()
     var that = this
     //获取当前的地理位置、速度
     wx.getLocation({
       type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
       success: function(res) {
         //  console.log(res)
         //赋值经纬度
         that.setData({
           'markers[1].latitude': res.latitude,
           'markers[1].longitude': res.longitude,
         })
       }
     })
     //  查询装货中、配送中、已完成的运单
     wx.request({
       url: utils.baseUrl + 'weChat/waybill',
       header: {
         "Content-Type": "application/text",
         "token": token
       },
       method: 'post',
       success(res) {
         //  console.log(res.data.data)
         that.setData({
           waylist: res.data.data
         })
         //  console.log(that.data.waylist)
         for (var i = 1; i < that.data.waylist.length; i++) {
           //  已完成
          //  var historylist=[]
           if (that.data.waylist[i].loadTime != null && that.data.waylist[i].unloadTime != null) {
             that.data.historylist.push(that.data.waylist[i])
            //  historylist.push(that.data.waylist[i])
            console.log(that.data.historylist)
            that.unique(that.data.historylist)
             that.setData({
               history: that.data.historylist
             })
             console.log(that.data.history)
             //  装货中
           } else if (that.data.waylist[i].loadTime == null || that.data.waylist[i].loadTime=="") {
             var arr = []
             arr.push(that.data.waylist[i].loadLonAndLag.split(","))
             for (var a = 0; a < arr.length; a++) {
               var startlatitude
               var startlongitude
               startlongitude = arr[a][0], startlatitude = arr[a][1]
             }
             that.setData({
               loading: that.data.waylist[i],
               waybillId: that.data.waylist[i].id,
               'markers[0].latitude': startlatitude,
               'markers[0].longitude': startlongitude
             })
             //  console.log(that.data.waybillId)
             //  配送中
           } else if (that.data.waylist[i].unloadTime == null || that.data.waylist[i].unloadTime=="") {
             var arr = [],
               arr1 = []
             var startlatitude, endlatitude
             var startlongitude, endlongitude
             arr.push(that.data.waylist[i].loadLonAndLag.split(","))
             arr1.push(that.data.waylist[i].unLoadLonAndLag.split(","))
             //  console.log(that.data.waylist[i].unLoadLonAndLag)
             //  console.log(arr)
             //  console.log(arr1)
             for (var a = 0; a < arr.length; a++) {
               startlongitude = arr[a][0], startlatitude = arr[a][1]
               //  console.log(startlongitude)
               //  console.log(startlatitude)
             }
             for (var a = 0; a < arr1.length; a++) {
               endlongitude = arr1[a][0], endlatitude = arr1[a][1]
               //  console.log(endlongitude)
               //  console.log(endlatitude)
             }
             that.setData({
               delivery: that.data.waylist[i],
               waybillId: that.data.waylist[i].id,
               'markers1[0].latitude': startlatitude,
               'markers1[0].longitude': startlongitude,
               'markers1[1].latitude': endlatitude,
               'markers1[1].longitude': endlongitude,
               'polyline.points[0].latitude': startlatitude,
               'polyline.points[0].longitude': startlongitude,
               'polyline.points[1].latitude': endlatitude,
               'polyline.points[1].longitude': endlongitude,
             })
             //  console.log(that.data.polyline.points[0].latitude)
             //  console.log(that.data.polyline.points[0].longitude)
             //  console.log(that.data.polyline.points[1].latitude)
             //  console.log(that.data.polyline.points[1].longitude)
             //  console.log(that.data.delivery)
           }
         }
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