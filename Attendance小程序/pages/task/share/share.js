Page({
  data: {
    command: '',
    id:'',
    attendID: '',
    userID: '',
    attendDate: '',
    amState: '',
    amDate: '',
    pmState: '',
    pmDate: '',
    attendAddress: '',
    remake:''
  },
  bindClose: function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
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
  bindSubmit: function () {
    var that = this;
    var openId = wx.getStorageSync('openId');
    wx.request({
      url: 'http://localhost/attendance/attending/updateAttendance.do',
      data: {
        remake:that.data.reamke,
        attendID: that.data.attendID,
        userWechat: openId
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        wx.showToast({
          title: '已申报',
          icon: 'loading',
          duration: 10000
        });
        console.log(res.data);
        that.bindClose();
      },
      fail: function () {
      },
      complete: function () {
      }
    });
  },
  
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.attendanceID
    });
    var openId = wx.getStorageSync('openId');
    wx.request({
      url: 'http://localhost/attendance/attending/attendanceDetail.do',
      data: {
        attendID:that.data.id,
        userWechat: openId
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        // success
        // res = res1;
        console.log(res.data.attendID);
        that.setData({
          attendID:res.data.attendID,
          userID:res.data.userID,
          attendDate:res.data.attendDate,
          amState:res.data.amState,
          amDate:res.data.amDate,
          pmState:res.data.pmState,
          pmDate:res.data.pmDate,
          attendAddress:res.data.attendAddress
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
  }
  
});