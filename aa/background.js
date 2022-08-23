/*
 * @Author: pglin66@126.com
 * @Date: 2022-08-09 17:27:32
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-08-19 17:44:20
 * @FilePath: /aa/background.js
 * @Description: 
 */
class backgroundApi {
  constructor() {
    console.log(arguments, this)
    if (arguments[0] && arguments[0].type && this[arguments[0].type]) {
      this[arguments[0].type](arguments[0])
    }


  }
  getPageSvg (msg) {
    console.log(msg)
    //发送消息给当前打开的浏览器窗口的content.js
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs)
      chrome.tabs.sendMessage(tabs[0].id, { ...msg, to: 'background' });
    })
  }
  svgTextList (msg) {
    //发送消息给当前打开的浏览器窗口的content.js
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs, 'svgTextList', window)

      chrome.tabs.sendMessage(tabs[0].id, { ...msg, type: 'sendSvgList', to: 'background' });

    })
  }
  svgList () {
    chrome.cookies.get({
      url: 'https://www.iconfont.cn/',
      name: 'ctoken'
    }, (cookies) => {
      console.log(cookies.value)

      const fileFormList = msg.text.map(item => {
        let ss = '<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="api-post-tabs-headitem-close"><g opacity="0.5"><rect x="4.66699" y="3.81836" width="12" height="1.8" rx="0.9" transform="rotate(45 4.66699 3.81836)"></rect><rect x="3.81848" y="12.3037" width="12" height="1.8" rx="0.9" transform="rotate(-45 3.81848 12.3037)"></rect></g></svg>'
        console.log(item)
        //svg标签转blob
        var blob = new Blob([item], { type: 'image/svg+xml' });
        //blob转file
        var file = new window.File([blob], `${(new Date).getTime()}.svg`)
        //FormData
        var form = new FormData()
        form.append("icons[]", file);
        return form
      })
      console.log(fileFormList[fileFormList.length - 1])










      //request_proxy({ url: `https://www.iconfont.cn/api/uploadIcons.json?ctoken=${cookies.value}&_csrf=${cookies.value}`, method: 'POST', data: fileFormList[fileFormList.length - 1] })
      // fileFormList.map(item => {
      //   request_proxy({ url: `https://www.iconfont.cn/api/uploadIcons.json?ctoken=${cookies.value}&_csrf=${cookies.value}`, method: 'POST', data: item })
      // })
    })

    // chrome.cookies.getAll({
    //   url: 'https://www.iconfont.cn/'
    // }, (cookies) => {
    //   //$container.textContent = cookies.map(c => c.name+"="+c.value).join(';')
    //   console.log(cookies, cookies.map(c => c.name + "=" + c.value).join(';'))
    // })

  }
}




// 接收iframe传来的信息，转发给content.js
chrome.runtime.onMessage.addListener(msg => {

  new backgroundApi(msg)
  console.log(msg, '=================================')

});
/* 
chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules'], (result) => {
  if (result.hasOwnProperty('ajaxInterceptor_switchOn')) {
    if (result.ajaxInterceptor_switchOn) {
      chrome.browserAction.setIcon({path: "/images/16.png"});
    } else {
      chrome.browserAction.setIcon({path: "/images/16_gray.png"});
    }
  }
});





// chrome.runtime.onMessage.addListener(function (e, sender) {
//   const { message, data } = e
//   const tabId = sender.tab.id
//   switch (message) {
//     case 'XHR':
//       request_proxy(data, tabId); break
//   }
// })
function downloadString (text, fileType, fileName) {
var blob = new Blob([text], { type: fileType });
var file = new window.File([blob], `${(new Date).getTime()}.svg`)
console.log(file)
var form = new FormData()
form.append("icons[]", file);
form.append("icons[1]", file);
//axios.post('https://www.iconfont.cn/api/uploadIcons.json?ctoken=KoojkqRBGsqDmNmmWx9TmVjz&_csrf=KoojkqRBGsqDmNmmWx9TmVjz', form)

request_proxy({url:'https://www.iconfont.cn/api/uploadIcons.json?ctoken=KoojkqRBGsqDmNmmWx9TmVjz&_csrf=KoojkqRBGsqDmNmmWx9TmVjz',method:'POST',data:form})
}

//let ss = '<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="api-post-tabs-headitem-close"><g opacity="0.5"><rect x="4.66699" y="3.81836" width="12" height="1.8" rx="0.9" transform="rotate(45 4.66699 3.81836)"></rect><rect x="3.81848" y="12.3037" width="12" height="1.8" rx="0.9" transform="rotate(-45 3.81848 12.3037)"></rect></g></svg>'
console.log(document.querySelectorAll('svg'))


//downloadString(ss, "image/svg+xml", "myCSV.svg")

//chrome.cookies.get  chrome.cookies.set chrome.cookies.remove

 */

function request_proxy ({ url, method, data }) {
  var XHR = new XMLHttpRequest()

  XHR.open(method, url)
  //XHR.setRequestHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundaryvHGneiAtBIXhuwKH');
  //XHR.setRequestHeader('cookie', 'ctoken=KoojkqRBGsqDmNmmWx9TmVjz; cna=OnxvG0cK/woCActd15z3Ph9D; xlly_s=1; EGG_SESS_ICONFONT=LwyPfFe9mdLtPg5kAyRM2oKTWe0dYQN45w0qN-zVhK6dp-njsVT2v8vj0y7Na1xO_qxR0Q5yn44fvFMYv4dAbFkkPN7Q2SIT7WFQ5FO2LlJPRozanaODFLGzCEEDMRgvbLgGZmiPuJhMHQ5bYOewp68Eh-ox30EiBoi6fhd5oL2YCL3tuUndTLylL3W2SYNjMEdvO3q8clM4oyqTH4X8Jg==; u=4020948; u.sig=-e-jhJ-MY_tRD580uh2Ayl9K_59pmh_xeB8feVeFFJA; isg=BE9PmUjFcbOYSXXP-jgtmlEs3uNZdKOWxZ7OgGFcVr7FMG0yaUau5-ZmMmCOSHsO');
  //  console.log(data)
  XHR.send(data)
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4) {

    }
  }
}