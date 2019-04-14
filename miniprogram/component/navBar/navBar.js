// component/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showBack: { // 控制返回箭头是否显示
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barHeight: wx.getSystemInfoSync().statusBarHeight + 46
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toBack: function() {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})