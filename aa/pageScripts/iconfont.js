/*
 * @Author: pglin66@126.com
 * @Date: 2022-08-15 09:37:42
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-08-22 16:36:46
 * @FilePath: /aa/pageScripts/iconfont.js
 * @Description: 
 */



window.addEventListener('DOMContentLoaded', function () {
  let imgS = [...document.querySelectorAll('img')]
  console.log(imgS)
  imgS.map(item => {
    item.onload = () => {
      console.log('加载成功')
    }
    item.addEventListener('error', () => {
      item.src = `https://temp.im/${item.offsetWidth}X${item.offsetHeight}/4CD964/fff`
      console.log('加载失败')
    })
  })
})
