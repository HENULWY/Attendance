var util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    user:{
      userAccount:'',
      userPassword:'',
      userCompanyID:'',
      userWechat:''
    },
    openId: '',
    userInfo: {},
    creating: false,
    button: {
      txt: '登陆'
    },
    modalHidden: true
  },

  accountInput: function (e) {
    console.log('Password=' + e.detail.value)
    this.data.user.userAccount = e.detail.value;
  },
  passwordInput: function (e) {
    console.log('Password=' + e.detail.value)
    this.data.user.userPassword = e.detail.value;
  },
  companyIDInput: function (e) {
    console.log('Password=' + e.detail.value)
    this.data.user.userCompanyID = e.detail.value;
  },

  // 设置任务名称
  bindKeyInput: function (e) {
    this.setData({
      'task.name': e.detail.value
    });
  },

  // 隐藏提示弹层
  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },

  // 创建任务
  createTask: function () {
    var that = this;
    var user = this.data.user;
    var openId = this.data.openId;
    var userInfo = this.data.userInfo;
   
    // this.setData({
    //   user:{
    //     userAccount: user.userAccount,
    //     userPassword: user.userPassword,
    //     userCompanyID: user.userCompanyID,
    //   }
    // })

    // console.log(openId);
    wx.showToast({
      title: '登陆中',
      icon: 'loading',
      duration: 10000
    });

    wx.request({
      url: 'http://localhost/attendance/user/weChatLogin.do',
      data: {
        userAccount: user.userAccount,
        userPassword: user.userPassword,
        userCompanyID: user.userCompanyID,
        userWechat: openId,
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function(res){
        // success
        wx.hideToast();
        
        var command = res;
        
        console.log(res);

        wx.navigateTo({
          url: '/pages/new/success/success?command=' + command,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  // 提交、检验
  bindSubmit: function (e) {
    var that = this;
    var user = this.data.user;
    var creating = this.data.creating;

    if (user.userAccount == '' || user.userAccount == '账号' || user.userPassword ==''||user.userPassword=='密码' ) {
      this.setData({
        modalHidden: false
      });
      console.log(that.data)
    } else {
      if (!creating) {
        this.setData({
          'creating': true
        });
        that.createTask();
      }
    }
  },
  
  onShow: function () {
    // 恢复新建按钮状态
    this.setData({
      'creating': false
    });
  },

  onHide: function () {
  },

  // 初始化设置
  onLoad: function () {
    var that = this;
    var now = new Date();
    var openId = wx.getStorageSync('openId');

    // 初始化昵称
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });

      that.setData({
        openId: openId
      })
    });

  }  
})