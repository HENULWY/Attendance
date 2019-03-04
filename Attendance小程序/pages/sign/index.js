/**
 * Page() 快速打卡页
 *   
 * @author marsliang <marsliang@tencent.com>
 * @date   2016‎-11-‎14 ‎20:07:04
 * @update 2016-11-30
 */
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    // 是否有签到任务
    flag: true,

    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 400,
    current: 0,

    tasks: [3],
    quickTasks: [],
    userInfo: {},
    openId: '',

    currentState: 0,
    currentTimeFlag: 0,

    currentLeaveStart: '',
    currentLeaveEnd: '',

    curTask: {},
    
    // 倒计时
    clock: {
      hour: '01',
      min: '00'
    },

    // 打卡按钮状态 0:未按压 1：按压 2：完成
    btn: 0,
    btnPress: false,
    
    updateAddres: false,

    // 提示框默认隐藏
    modalHidden: true,
    modalText: '',
    leaveHidden: true,
    
    // 默认心情为空
    humor: '',
    humorAble: false,
    // 请假事由
    reason: '',

    latitude: 23.099994,
    longitude: 113.324520,
  },
  // 切换滑块
  changeSwiper: function (e) {
    var that = this;
    var sign;
    var now = new Date();
    var nowDate = util.getYMD(now);
    var time_str = nowDate + ' ' + this.data.tasks[e.detail.current].signTime + ':00';

    this.setData({
      current: e.detail.current
    })

    sign = new Date(time_str.replace(/-/g, '/'));

    if (now.getTime() < sign.getTime()) {
        // 倒计时状态
        that.setData({
          currentTimeFlag: 0
        })
    } else {
        // 已迟到状态
        that.setData({
          currentTimeFlag: 1
        })
    }

    var disTime = Math.abs(now.getTime() - sign.getTime());

    that.setData({
      'clock.hour': util.formatNumber(Math.floor(disTime/(3600*1000))),
      'clock.min': util.formatNumber(Math.floor(disTime%(3600*1000)/(60*1000)))
    })

    this.setData({
      currentState: this.data.tasks[e.detail.current].state,
      curTask: this.data.tasks[e.detail.current],
      currentLeaveStart: this.data.tasks[e.detail.current].startTime,
      currentLeaveEnd: this.data.tasks[e.detail.current].endTime
    })
    
  },


  // 签到打卡
  signTask: function () {
    var that = this;
    var d;
    var qqmapsdk = new QQMapWX({
      key: 'DLSBZ-PIYKX-G6B4H-TSCMB-MMBCF-4PBME' // 必填
    });
    var address='';

    if (!this.data.btnPress) {
      wx.showToast({
        title: '请求中',
        icon: 'loading',
        duration: 1000
      })

      this.setData({
        'btn': 1,
        'btnPress': true
      });

      setTimeout(function () {
        that.setData({
          'btn': 0,
          'btnPress': false
        });
      }, 500);

      wx.getLocation({
        type: 'wgs84',
        success: function(res){
          var address = '';
          var openId = wx.getStorageSync('openId');
          var my = {
            latitude: res.latitude,
            longitude: res.longitude
          };

          that.latitude = res.latitude;
          that.longitude = res.longitude;
          that.mapCtx.moveToLocation();

          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function (addressRes) {
              address = addressRes.result.formatted_addresses.recommend;

              wx.request({
                url: 'http://localhost/attendance/signin/insertSignIn.do',
                data: {
                  userWechat: openId,
                  longitude: that.longitude,
                  latitude: that.latitude,
                  signInAddress: address,
                },
                method: 'POST',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }, // 设置请求的 header
                success: function (res) {
                  // success
                  console.log(address);
                  wx.showToast({
                    title: '签到成功',
                    icon: 'success',
                    duration: 1000
                  });
                  that.setData({
                    modalHidden: true
                  })
                },
                fail: function () {
                  // fail
                },
                complete: function () {
                  // complete
                }
              })





            }
          })

          // success
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

  // 隐藏弹出框
  modalChange: function () {
    this.setData({
      'modalHidden': true
    });
  },

  // 监听输入框
  bindKeyInput: function (e) {
    this.setData({
      humor: e.detail.value
    })
  },

  onReady: function () {
    this.mapCtx = wx.createMapContext('attendMap')
  },

  // 监听页面显示
  onShow: function () {
    var that = this;
    var openId, Timer;

    Timer = setInterval(function () {
      if (wx.getStorageSync('openId')) {
        clearInterval(Timer);
        openId = wx.getStorageSync('openId');
      }
    }, 30);
  },

  // 初始化
  onLoad: function () {
    var that = this, openId;
    app.getUserInfo(function(userInfo){
      
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
  }
});