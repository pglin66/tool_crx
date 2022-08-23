// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log('The color is green.');
//   });
//   chrome.runtime.onInstalled.addListener(function(details) {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });


// chrome.webNavigation.onBeforeNavigate.addListener(() => {
//   console.log(1)
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: `console.log('executeScript')`});
//   });
// });

// chrome.webRequest.onBeforeRequest.addListener(
//   function(info) {   
//     console.log("Cat intercepted: " + info.url);
//     // Redirect the lolcal request to a random loldog URL.
//     chrome.tabs.sendMessage(details.tabId, details, function(response) {
//       // 此处可以修改response...
//       redirectUrl = "data:application/json;charset=UTF-8;base64," + Base64.encode(newResponse)
//   });
//     return  ({cancel: false});
// },
// ({
//     urls: ["*://*/*"],
//     types: ["script"]
// }),
// ["blocking"]);
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "toggle");
  })
});

// 接收iframe传来的信息，转发给content.js
chrome.runtime.onMessage.addListener(msg => {
  if (msg.type === 'ajaxInterceptor' && msg.to === 'background') {
    if (msg.key === 'ajaxInterceptor_switchOn') {
      if (msg.value === true) {
        chrome.browserAction.setIcon({
          path: {
            16: '/images/16.png',
            32: '/images/32.png',
            48: '/images/48.png',
            128: '/images/128.png',
          }
        });
      } else {
        chrome.browserAction.setIcon({
          path: {
            16: '/images/16_gray.png',
            32: '/images/32_gray.png',
            48: '/images/48_gray.png',
            128: '/images/128_gray.png',
          }
        });
      }
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      chrome.tabs.sendMessage(tabs[0].id, { ...msg, to: 'content' });
    })
  }
});

chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules'], (result) => {
  if (result.hasOwnProperty('ajaxInterceptor_switchOn')) {
    if (result.ajaxInterceptor_switchOn) {
      chrome.browserAction.setIcon({ path: "/images/16.png" });
    } else {
      chrome.browserAction.setIcon({ path: "/images/16_gray.png" });
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

  request_proxy({ url: 'https://www.iconfont.cn/api/uploadIcons.json?ctoken=KoojkqRBGsqDmNmmWx9TmVjz&_csrf=KoojkqRBGsqDmNmmWx9TmVjz', method: 'POST', data: form })
}

//let ss = '<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="api-post-tabs-headitem-close"><g opacity="0.5"><rect x="4.66699" y="3.81836" width="12" height="1.8" rx="0.9" transform="rotate(45 4.66699 3.81836)"></rect><rect x="3.81848" y="12.3037" width="12" height="1.8" rx="0.9" transform="rotate(-45 3.81848 12.3037)"></rect></g></svg>'
console.log(document.querySelectorAll('svg'))


//downloadString(ss, "image/svg+xml", "myCSV.svg")

//chrome.cookies.get  chrome.cookies.set chrome.cookies.remove

function request_proxy ({ url, method, data }, tabId) {
  var XHR = new XMLHttpRequest()
  // console.log(tabId)
  XHR.open(method, url)
  //XHR.setRequestHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundaryvHGneiAtBIXhuwKH');
  XHR.setRequestHeader('cookie', 'ctoken=KoojkqRBGsqDmNmmWx9TmVjz; cna=OnxvG0cK/woCActd15z3Ph9D; xlly_s=1; EGG_SESS_ICONFONT=LwyPfFe9mdLtPg5kAyRM2oKTWe0dYQN45w0qN-zVhK6dp-njsVT2v8vj0y7Na1xO_qxR0Q5yn44fvFMYv4dAbFkkPN7Q2SIT7WFQ5FO2LlJPRozanaODFLGzCEEDMRgvbLgGZmiPuJhMHQ5bYOewp68Eh-ox30EiBoi6fhd5oL2YCL3tuUndTLylL3W2SYNjMEdvO3q8clM4oyqTH4X8Jg==; u=4020948; u.sig=-e-jhJ-MY_tRD580uh2Ayl9K_59pmh_xeB8feVeFFJA; isg=BE9PmUjFcbOYSXXP-jgtmlEs3uNZdKOWxZ7OgGFcVr7FMG0yaUau5-ZmMmCOSHsO');
  console.log(data)
  XHR.send(data)
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4) {
      // chrome.tabs.sendMessage(tabId, {
      //   message: 'XHR_response',
      //   data: XHR.responseText
      // })
    }
  }
}