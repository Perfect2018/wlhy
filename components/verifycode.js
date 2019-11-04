// components/verifycode/verifycode.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow:false,
    isFocus:false,
    inputValue:'',
    src:'../images/close.png',
    phone:'18800000000',
    codes:["","","",""],
    // title:'短信验证'
  },
  /**
  * 组件的属性列表
  */
  // properties: {
  //   title: {
  //     type: String,
  //     value: "短信验证"
  //   },
  //   content: {
  //     type: String,
  //     value: "为保证您的签署环境安全,需短信验证验证手机"
  //   }
  // },
  /**
   * 组件的方法列表
   */
  methods: {
    //展示
    showView({phone, inputSuccess}) {
      this.inputSuccess = inputSuccess;
      var mPhone = phone.substr(0, 3) + '****' + phone.substr(7); 
      this.setData({
        isShow: !this.data.isShow,
        phone: mPhone,
        isFocus:true,
        res:["1","2","3","4","5","6"],
        codes: ["", "", "", "", "", ""]
      })
    },
    /**
     * 关闭组件
     */
    closeView(){
      this.setData({
        isShow: !this.data.isShow,
        isFocus:false
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
      for (var i = 0; i < (textLength > 6 ? 6 : textLength) ; i++ ){
        var code = text.substr(i, 1);
        codeArray[i] = (code);
      } 
      for (var i = codeArray.length; i < 6; i++) {
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
    getCode(){

    },
    // 确定按钮
    commit(){
      if(this.data.res==this.data.codes){
        console.log("验证通过")
      }else if(this.data.res.length!=this.data.codes.length){
        console.log("验证失败")
      }else{
        for(let i in this.data.res){
          if(this.data.res[i]!=this.data.codes[i]){
            console.log("验证失败")
            return false
          }
        }
        console.log("验证通过")
      }
      
    }
  }
  
})
