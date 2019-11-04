// pages/accept/accept.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDisabled: false,
    isShow1: false,
    isShow: false,
    isFocus: false,
    inputValue: '',
    src: '../../images/close.png',
    phone: '18812349876',
    codes: ["", "", "", ""],
    res: ["1", "2", "3", "4"],
  },
  agree() {
    var _this=this
    this.setData({
      isDisabled: true,
      isShow: true
    })
    // _this.showView(this.data.phone)
  },
  next() {
    wx.navigateTo({
      url: '../acceptcontract/acceptcontract',
    })
  },

  // openVerifyCodeView: function () {
  //   //弹出组件,此处必须把this重新赋予变量不然callback内部会提示找不到this
  //   var _this = this;
  //   _this.showView({
  //     phone: "18800000000",
  //     inputSuccess: function (phoneCode) {
  //       //调用组件关闭方法
  //       _this.verifycode.closeView();
  //       //设置数据
  //       _this.setData({
  //         code: phoneCode
  //       });
  //     }
  //   });
  // },
  // 验证码
  //展示
  // showView({ phone, inputSuccess }) {
  //   this.inputSuccess = inputSuccess;
  //   var mPhone = phone.substring(0, 3) + '****' + phone.substring(7);
  //   this.setData({
  //     isShow: !this.data.isShow,
  //     phone: mPhone,
  //     isFocus: true,
  //     codes: ["", "", "", ""]
  //   })
  // },
  /**
   * 关闭组件
   */
  closeView() {
    this.setData({
      isShow: !this.data.isShow,
      isFocus: false
    })
  },

  /**
   * 点击输入框
   */
  openKeyboard: function () {
    this.setData({
      isFocus: true
    })
  },
  /**
   * 监听键盘输入
   */
  listenKeyInput: function (e) {
    var text = e.detail.value;
    var textLength = text.length;
    var codeArray = new Array();
    for (var i = 0; i < (textLength > 4 ? 4 : textLength); i++) {
      var code = text.substr(i, 1);
      codeArray[i] = (code);
    }
    for (var i = codeArray.length; i < 4; i++) {
      codeArray.push("");
    }
    this.setData({
      codes: codeArray
    })
    // if (textLength >5 ) {
    //   var returnString = text.substr(0, 6);
    //   this.inputSuccess(returnString);
    //   this.setData({
    //     inputValue:''
    //   });
    // }
  },
  // 获取验证码按钮
  getCode() {

  },
  // 确定按钮
  commit() {
    var _this = this
    // console.log("开始验证")
    // console.log(this.data.codes)
    if (this.data.res == this.data.codes) {
     wx:wx.showToast({
       title: '验证通过',
       icon: '',
     })
    } else if (this.data.res.length != this.data.codes.length) {
      console.log("验证失败")
    } else {
      for (let i in this.data.res) {
        if (this.data.res[i] != this.data.codes[i]) {
          console.log("验证失败")
          this.setData({
            isShow1: true,
            isShow:false
          })
          // this.binding()
          return false
        }
      }
      console.log("验证通过")
      _this.closeView()
    }

  },
  close(){
    this.setData({
      isShow1:false
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