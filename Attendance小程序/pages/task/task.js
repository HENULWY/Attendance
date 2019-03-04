var util = require('../../utils/util.js');
var lvUtil = require("../../utils/lvUtil.js");
var app = getApp();
var that;

Page({
  data: {
    tabIndex: 0,
    myTasks: [],
    hotTasks: [],
    userInfo: {},
    openId: ''
  },


  // tab menu 切换
  changeTab: function (e) {
    var id = e.currentTarget.id;
    var that = this;

    if (id == 'myTask') {
      this.setData({
        tabIndex: 0
      });
      lvUtil.initLv(that, "signin/selectSignIn.do",
        function (params) {
          params.type = 2;
          params.sourceType = 0;
          params.labelId = 0;
          params.priceType = 2;
          params.categoryIds = "";
        },
        function (netData) {
          return netData;
        },
        function (item) {
          // utils.showAlbumItemPriceText(item);
        }
      )


    }

    if (id == 'hotTask') {
      this.setData({
        tabIndex: 1
      });
      lvUtil.initLv(that, "attending/selectAttendance.do",
        function (params) {
          params.type = 2;
          params.sourceType = 0;
          params.labelId = 0;
          params.priceType = 2;
          params.categoryIds = "";
        },
        function (netData) {
          return netData;
        },
        function (item) {
          // utils.showAlbumItemPriceText(item);
        }
      )
    }
  },


  onLoadMore:function(e){

  },


  onRefesh: function (e) {

  },

  // 热门任务
  haddleHotTask: function (e) {
    var openId = wx.getStorageSync('openId');
    var userInfo = this.data.userInfo;
    var id = e.currentTarget.id;
    var index = id.split('_')[0];
    var taskId = id.split('_')[1];
    var list = this.data.hotTasks;
    var that = this;
    
    wx.showToast({
      title: '请求中',
      icon: 'loading',
      duration: 10000
    });

    if (list[index].added) {
      wx.request({
        url: 'https://www.cpcsign.com/api/task/' + taskId + '/' + openId,
        data: {},
        method: 'DELETE',
        success: function(res){
          for (var i = 0, len = list.length; i < len; ++i) {
            if (index == i) {
              list[i].added = !list[i].added;
            }
          }
          that.setData({
            hotTasks: list
          })
          wx.showToast({
            title: '您已加入',
            icon: 'success',
            duration: 1000
          })
        }
      })
    } else {
      wx.request({
        url: 'https://www.cpcsign.com/api/task/' + taskId,
        data: {
          openId: openId,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl
        },
        method: 'PUT', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          for (var i = 0, len = list.length; i < len; ++i) {
            if (index == i) {
              list[i].added = !list[i].added;
            }
          }
          that.setData({
            hotTasks: list
          })
          wx.showToast({
            title: '您已退出',
            icon: 'success',
            duration: 1000
          })

        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  },



  onShow: function () {
    var that = this;
    
  },

  // 初始化设置
  onLoad: function () {
    var that = this;
    that.data.openId = wx.getStorageSync('openId');
    var openId = wx.getStorageSync('openId');
    // wx.getStorageSync('openId');
    var hotTasks = this.data.hotTasks;
    // lesson / search / v1.json
    lvUtil.initLv(that, "signin/selectSignIn.do",
      function (params) {
        params.type = 2;
        params.sourceType = 0;
        params.labelId = 0;
        params.priceType = 2;
        params.categoryIds = "";
      },
      function (netData) {

        return netData;
      },
      function (item) {
        // utils.showAlbumItemPriceText(item);
      }
    )


    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });

      that.setData({
        openId: openId
      })
    });

    that.setData({
      hotTasks: hotTasks
    })
  }

})