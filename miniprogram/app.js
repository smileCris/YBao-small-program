//app.js
App({
  onLaunch: function() {
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      },
      fail(err) {
        console.log(err);
      }
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 用户信息追踪
        traceUser: true,
      })
    }
  },
  globalData: {
    navHeight: 0
  }
})