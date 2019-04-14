// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = wx.cloud.database()
  const story = db.collection('story')
  const circle = db.collection('circle')
  return event
}