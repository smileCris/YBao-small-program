//story.js
const db = wx.cloud.database()
const mystory = db.collection('story')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    storyList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    mystory.get({
      success(res) {
        _this.setData({
          storyList: res.data
        })
      }
    })
  },

  toDetail: function(e) {
    let item = e.currentTarget.dataset.item
    let img = item.img.replace(/\=/g, "%3D").replace(/\&/g, "%26")
    wx.navigateTo({
      url: `../storyDetail/storyDetail?name=${item.name}&time=${item.time}&imgUrl=${img}&vedio=${item.vedio}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})