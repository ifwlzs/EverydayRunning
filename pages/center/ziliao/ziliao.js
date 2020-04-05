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
    var that = this;
    var overId = wx.getStorageSync('overId');
    var overPw = wx.getStorageSync('overPw');
    console.log("缓存内容是", + overId);
    console.log("缓存内容是", + overPw);
    wx.request({
      url: 'https://www.camrun.today/userquery',
      method: "post",
      data: {
        "key": "ou89wud9893rwosjhfhsejfhou89wud9893rwEOCPosjhfhsejfhjsufuhRJDEeifdwhgifwiojor3r230jsufuheifdwhgifwiojor3r230fhou89wud9893rwEOCPo",
        "stu_id": overId,
        "password": overPw
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.state == "OK") {
          that.setData({
            name: res.data.words.name,
            major: res.data.words.major,
            system: res.data.words.s_system,
            grade: res.data.words.s_grade,
            s_class: res.data.words.s_class,
            college: res.data.words.college
          })
        } else {
          wx.showToast({
            title: res.data.words,
            icon: 'none',
            duration: 2000
          })
        }
      }
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

  }
})