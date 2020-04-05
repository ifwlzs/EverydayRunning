//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onLoad: function () {
    
  },

  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

    // 登录处理
  login: function (e) {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      console.log(that.data.username);
      console.log(that.data.password);
      wx.request({
        url: 'https://www.camrun.today/login',
        method: "post",
        data: {                    "key":"ou89wud9893rwosjhfhsejfhou89wud9893rwEOCPosjhfhsejfhjsufuhRJDEeifdwhgifwiojor3r230jsufuheifdwhgifwiojor3r230fhou89wud9893rwEOCPo",
          "stu_id":that.data.username,
          "password":that.data.password 
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res) {
          if (res.data.state == "OK") {
            var overId = that.data.username;
            var overPw = that.data.password;
            //console.log(overId);
            wx.setStorageSync('overId', overId);
            wx.setStorageSync('overPw', overPw);
            wx.switchTab({
              url: '../user/user' 
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
    }
  } 
})