


// 在页面上插入代码
const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.extension.getURL('pageScripts/iconfont.js'));
document.documentElement.appendChild(script);

// //接收浏览器页面消息
// window.addEventListener('message', function (e) {
//   console.log(e.data)
//   //发送给background
//   chrome.runtime.sendMessage(e.data);

// });





//监听价值完发送数据给浏览器页面
script.addEventListener('load', () => {
  chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules'], (result) => {
    if (result.hasOwnProperty('ajaxInterceptor_switchOn')) {
      postMessage({ type: 'ajaxInterceptor', to: 'pageScript', key: 'ajaxInterceptor_switchOn', value: result.ajaxInterceptor_switchOn });
    }
    if (result.ajaxInterceptor_rules) {
      postMessage({ type: 'ajaxInterceptor', to: 'pageScript', key: 'ajaxInterceptor_rules', value: result.ajaxInterceptor_rules });
    }
  });
});



let iframe;
let iframeLoaded = false;

// 只在最顶层页面嵌入iframe
if (window.self === window.top) {

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      iframe = document.createElement('iframe');
      iframe.className = "api-interceptor";
      iframe.style.setProperty('height', '100%', 'important');
      iframe.style.setProperty('width', '450px', 'important');
      iframe.style.setProperty('min-width', '1px', 'important');
      iframe.style.setProperty('position', 'fixed', 'important');
      iframe.style.setProperty('top', '0', 'important');
      iframe.style.setProperty('right', '0', 'important');
      iframe.style.setProperty('left', 'auto', 'important');
      iframe.style.setProperty('bottom', 'auto', 'important');
      iframe.style.setProperty('z-index', '9999999999999', 'important');
      iframe.style.setProperty('transform', 'translateX(470px)', 'important');
      iframe.style.setProperty('transition', 'all .4s', 'important');
      iframe.style.setProperty('box-shadow', '0 0 15px 2px rgba(0,0,0,0.12)', 'important');
      iframe.frameBorder = "none";
      iframe.src = chrome.extension.getURL("iframe/index.html")
      document.body.appendChild(iframe);
      let show = false;

      chrome.runtime.onMessage.addListener((msg, sender) => {
        if (msg == 'toggle') {
          show = !show;
          iframe.style.setProperty('transform', show ? 'translateX(0)' : 'translateX(470px)', 'important');
        }

        return true;
      });
    }
  }
}


class contentApi {
  constructor() {
    console.log(arguments, this)
    if (arguments[0] && arguments[0].type && this[arguments[0].type]) {
      this[arguments[0].type](arguments[0])
    }

  }
  getPageSvg (msg) {

    console.log('=================content++++++++++++')
    const svgList = document.querySelectorAll('svg');
    const svgTextList = [...svgList].map(item => {
      return item.outerHTML
    })
    console.log(svgTextList)
    window.open(chrome.extension.getURL("dist/index.html?/#/svgList"))
    //发送给background
    setTimeout(() => {
      chrome.runtime.sendMessage({ type: 'svgTextList2', to: 'background', data: svgTextList });
    }, 100)

  }
  sendSvgList (msg) {
    console.log('============================================------------------------===============', msg)
    // postMessage(msg);
    window.postMessage(
      { type: "svgList", text: msg }, "*"
    );
  }
}

// 接收background.js传来的信息，转发给pageScript
chrome.runtime.onMessage.addListener(msg => {

  new contentApi(msg)
  console.log(1)
  // if (msg.type === 'ajaxInterceptor' && msg.to === 'content') {
  //   if (msg.hasOwnProperty('iframeScriptLoaded')) {
  //     if (msg.iframeScriptLoaded) iframeLoaded = true;
  //   } else {
  //     postMessage({ ...msg, to: 'pageScript' });
  //   }
  // }
});

// 接收pageScript传来的信息，转发给iframe
window.addEventListener("pageScript", function (event) {
  if (iframeLoaded) {
    chrome.runtime.sendMessage({ type: 'ajaxInterceptor', to: 'iframe', ...event.detail });
  } else {
    let count = 0;
    const checktLoadedInterval = setInterval(() => {
      if (iframeLoaded) {
        clearInterval(checktLoadedInterval);
        chrome.runtime.sendMessage({ type: 'ajaxInterceptor', to: 'iframe', ...event.detail });
      }
      if (count++ > 500) {
        clearInterval(checktLoadedInterval);
      }
    }, 10);
  }
}, false);

// window.addEventListener("message", function(event) {
// console.log(event.data)
// }, false);

// window.parent.postMessage({ type: "CONTENT", text: "Hello from the webpage!" }, "*");


// var s = document.createElement('script');
// s.setAttribute('type', 'text/javascript');
// s.innerText = `console.log('test')`;
// document.documentElement.appendChild(s);

