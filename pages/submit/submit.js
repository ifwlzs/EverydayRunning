// pages/submit/submit.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      overId : wx.getStorageSync('overId'),
      overPw : wx.getStorageSync('overPw')
    })
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

  },
  // 获取报错时间
  timeInput: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  // 获取报错路线
  routeInput: function (e) {
    this.setData({
      route: e.detail.value
    })
  },
  // 获取报错手机号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 获取报错备注
  remakesInput: function (e) {
    this.setData({
      remakes: e.detail.value
    })
  },
  //提交处理
  submit: function (e) {
    var that = this;
    if (this.data.time.length == 0 || this.data.route.length == 0 || this.data.phone.length == 0) {
      wx.showToast({
        title: '上报内容不能为空',
        icon: 'none',
        duration: 2000
      })
    } else{
      wx.request({
        url: 'https://www.camrun.today/uperror',
      method: "post",
      data: {
      "key": "ou89wud9893rwosjhfhsejfhou89wud9893rwEOCPosjhfhsejfhjsufuhRJDEeifdwhgifwiojor3r230jsufuheifdwhgifwiojor3r230fhou89wud9893rwEOCPo",
      "stu_id": that.data.overId,
      "password": that.data.overPw,
      "time":that.data.time,
      "route":that.data.route,
      "phone":that.data.phone,
      "remakes":that.data.remakes
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res){
        if (res.data.state == "OK") {
        // wx.showToast({
        //   title: res.data.words,
        //   icon: 'none',
        //   duration: 2000
        // })
        console.log(res);
        }
        else{
        // wx.showToast({
        //   title: res.data.words,
        //   icon: 'none',
        //   duration: 2000
        // })
        console.log(res);
      }
    }
      })
    }
  }, 
  bindDateChange: function (e) {
    //获取当前选择日期
    this.setData({
      date: e.detail.value
    })
  }
})