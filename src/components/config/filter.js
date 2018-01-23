/**
 * Author：Xavier;
 * Create  Time：2018-01-19 18:54;
 * Description：
 */
import Vue from 'vue'
// 时间格式化过滤器
Vue.filter('oDate', (value) => {
  let a = new Date(value)
  let b = new Date()
  let leftTime = b - a
  let month = parseInt(leftTime / 1000 / 60 / 60 / 24 / 30 % 12, 10)
  let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10)
  let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10)
  let minutes = parseInt(leftTime / 1000 / 60 % 60, 10)
  let seconds = parseInt(leftTime / 1000 % 60, 10)
  if (month > 0) {
    return month + '月前'
  }
  if (days > 0) {
    return days + ' 天前'
  }
  if (hours > 0) {
    return hours + ' 小时前'
  }
  if (minutes > 0) {
    return minutes + ' 分钟前'
  }
  if (seconds > 0) {
    return seconds + ' 几秒前'
  }
})
