const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 网络请求方法
var baseUrl ="https://www.wangluohuoyun.com.cn/"
// var baseUrl ="http://192.168.1.103:443/"
module.exports = {
  formatTime: formatTime,
  baseUrl:baseUrl
}
