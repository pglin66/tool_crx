/*请求响应修改器1.0*/class HttpRequest extends window.XMLHttpRequest {
  constructor() {
    super(...arguments);
    this._url = "";
    this._params = "";
    this.onreadystatechange = null;
    let responseText = "";
    Object.defineProperty(this, "responseText", {
      get () {
        return responseText
      },
      set (v) {
        responseText = v
      }
    })
  }
  send () {
    const arr = [...arguments];
    if (arr[0]) {
      const params = window.prompt(`———————————— 接口地址 ————————————\n${this._url}\n————————————    参数    ————————————\n${_deCode(arr[0]).join("\n")}`, arr[0]);
      if (params !== null) {
        arr[0] = params
      }
    }
    return super.send(...arr)
  }
  open () {
    const arr = [...arguments];
    const url = arr[1];
    if (url) {
      const [path, params] = url.split(/\?/);
      this._url = path;
      this._params = params;
      if (this._params) {
        const params = window.prompt(`———————————— 接口地址 ————————————\n${this._url}\n————————————    参数    ————————————\n${_deCode(this._params).join("\n")}`, this._params);
        if (params !== null) {
          arr[1] = this._url + "?" + params
        }
      }
    }
    let fn = this.onreadystatechange;
    Object.defineProperty(this, "onreadystatechange", {
      set (v) {
        fn = v;
      }
    });
    super.onreadystatechange = () => {
      if (this.readyState === 4 && this.status === 200) {
        const responseText = super.responseText;
        if (responseText) {
          const res = window.prompt(`———————————— 接口地址 ————————————\n${this._url}\n————————————  返回值  ————————————\n${responseText.slice(0, 50) + (responseText.length > 50 ? '...' : "")}`, responseText);
          if (res !== null) {
            this.responseText = res
          } else {
            this.responseText = super.responseText
          }
        } else {
          this.responseText = super.responseText
        }
      }
      if (fn) fn();
    };
    return super.open(...arr)
  }
}
function _deCode (params) {
  return params.split("&").map((a) => {
    const [key, value] = a.split("=");
    if (!key) return "";
    return decodeURIComponent(key) + "=" + decodeURIComponent(value)
  })
}
window.XMLHttpRequest = HttpRequest;




// 命名空间
let ajax_interceptor_qoweifjqon = {
  settings: {
    ajaxInterceptor_switchOn: false,
    ajaxInterceptor_rules: [],
  },
  originalXHR: window.XMLHttpRequest,
  myXHR: function () {
    let pageScriptEventDispatched = false;
    const modifyResponse = () => {
      console.log(this.responseURL)
      ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_rules.forEach(({ filterType = 'normal', switchOn = true, match, overrideTxt = '' }) => {
        let matched = false;
        if (switchOn && match) {
          if (filterType === 'normal' && this.responseURL.indexOf(match) > -1) {
            matched = true;
          } else if (filterType === 'regex' && this.responseURL.match(new RegExp(match, 'i'))) {
            matched = true;
          }
        }
        if (matched) {
          this.responseText = overrideTxt;
          this.response = overrideTxt;

          if (!pageScriptEventDispatched) {
            window.dispatchEvent(new CustomEvent("pageScript", {
              detail: { url: this.responseURL, match }
            }));
            pageScriptEventDispatched = true;
          }
        }
      })
    }

    const xhr = new ajax_interceptor_qoweifjqon.originalXHR;
    for (let attr in xhr) {
      if (attr === 'onreadystatechange') {
        xhr.onreadystatechange = (...args) => {
          if (this.readyState == 4) {
            // 请求成功
            if (ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_switchOn) {
              // 开启拦截
              modifyResponse();
            }
          }
          this.onreadystatechange && this.onreadystatechange.apply(this, args);
        }
        continue;
      } else if (attr === 'onload') {
        xhr.onload = (...args) => {
          // 请求成功
          if (ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_switchOn) {
            // 开启拦截
            modifyResponse();
          }
          this.onload && this.onload.apply(this, args);
        }
        continue;
      }

      if (typeof xhr[attr] === 'function') {
        this[attr] = xhr[attr].bind(xhr);
      } else {
        // responseText和response不是writeable的，但拦截时需要修改它，所以修改就存储在this[`_${attr}`]上
        if (attr === 'responseText' || attr === 'response') {
          Object.defineProperty(this, attr, {
            get: () => this[`_${attr}`] == undefined ? xhr[attr] : this[`_${attr}`],
            set: (val) => this[`_${attr}`] = val,
            enumerable: true
          });
        } else {
          Object.defineProperty(this, attr, {
            get: () => xhr[attr],
            set: (val) => xhr[attr] = val,
            enumerable: true
          });
        }
      }
    }
  },

  originalFetch: window.fetch.bind(window),
  myFetch: function (...args) {
    return ajax_interceptor_qoweifjqon.originalFetch(...args).then((response) => {
      let txt = undefined;
      ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_rules.forEach(({ filterType = 'normal', switchOn = true, match, overrideTxt = '' }) => {
        let matched = false;
        if (switchOn && match) {
          if (filterType === 'normal' && response.url.indexOf(match) > -1) {
            matched = true;
          } else if (filterType === 'regex' && response.url.match(new RegExp(match, 'i'))) {
            matched = true;
          }
        }

        if (matched) {
          window.dispatchEvent(new CustomEvent("pageScript", {
            detail: { url: response.url, match }
          }));
          txt = overrideTxt;
        }
      });

      if (txt !== undefined) {
        const stream = new ReadableStream({
          start (controller) {
            // const bufView = new Uint8Array(new ArrayBuffer(txt.length));
            // for (var i = 0; i < txt.length; i++) {
            //   bufView[i] = txt.charCodeAt(i);
            // }
            controller.enqueue(new TextEncoder().encode(txt));
            controller.close();
          }
        });

        const newResponse = new Response(stream, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
        });
        const proxy = new Proxy(newResponse, {
          get: function (target, name) {
            switch (name) {
              case 'ok':
              case 'redirected':
              case 'type':
              case 'url':
              case 'useFinalURL':
              case 'body':
              case 'bodyUsed':
                return response[name];
            }
            return target[name];
          }
        });

        for (let key in proxy) {
          if (typeof proxy[key] === 'function') {
            proxy[key] = proxy[key].bind(newResponse);
          }
        }

        return proxy;
      } else {
        return response;
      }
    });
  },
}

window.addEventListener("message", function (event) {
  const data = event.data;

  if (data.type === 'ajaxInterceptor' && data.to === 'pageScript') {
    ajax_interceptor_qoweifjqon.settings[data.key] = data.value;
  }

  if (ajax_interceptor_qoweifjqon.settings.ajaxInterceptor_switchOn) {
    window.XMLHttpRequest = ajax_interceptor_qoweifjqon.myXHR;
    window.fetch = ajax_interceptor_qoweifjqon.myFetch;
  } else {
    window.XMLHttpRequest = ajax_interceptor_qoweifjqon.originalXHR;
    window.fetch = ajax_interceptor_qoweifjqon.originalFetch;
  }
}, false);