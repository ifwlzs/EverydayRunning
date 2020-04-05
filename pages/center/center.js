Page({

  /**
   * 页面的初始数据
   */
  data: {
    userListInfo:[{
      icon:'/images/个人.png',
      index: '0',
      text:'个人资料',
    },{
        icon:'/images/进度.png',
        index: '1',
        text: '报错进度'
      }, {
        icon: '/images/修改密码.png',
        index: '2',
        text: '修改密码'
      }, {
        icon: '/images/联系我们.png',
        index: '3',
        text: '联系我们'
      }
    ]
  },
  centernew: function (e) {
    let mark = e.currentTarget.dataset.mark+"";
    console.log(mark);
    switch (mark) {
      case "0":
        wx.navigateTo({ url: '/pages/center/ziliao/ziliao',});
        break;
      case "1": 
        wx.navigateTo({ url: '/pages/center/jindu/jindu',});
        break;
      case "2":
        wx.navigateTo({ url: './gaimima/gaimima',});
        break;
      case "3":
        wx.navigateTo({url: './lianxi/lianxi',});
        break;
       }
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // app.getUserInfo(function (userInfo)){
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // }
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