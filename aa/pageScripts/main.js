/*
 * @Author: pglin66@126.com
 * @Date: 2022-08-09 17:27:32
 * @LastEditors: pglin66@126.com
 * @LastEditTime: 2022-08-11 15:03:49
 * @FilePath: \mps_merchantc:\Users\plin\Downloads\ajax-interceptor-master\pageScripts\main.js
 * @Description: 
 */
/*请求响应修改器1.0*/
console.log(
  Mock.mock({
    "string|1-10": "★"
  })
)
var a = {
  "target_id": "e5892b6f-a2ec-4dc3-8516-fd52e841c266",
  "parent_id": "0",
  "project_id": "139e63c7-ff21-4b5f-a5ed-770875ccf088",
  "mark": "developing",
  "target_type": "api",
  "example_type": "0",
  "name": "初始化视频",
  "method": "POST",
  "sort": 5,
  "type_sort": 1,
  "update_day": 1660060800000,
  "update_dtime": 1660113333,
  "bak_id": 0,
  "version": 6,
  "is_publish": 0,
  "publisher": 0,
  "publish_dtime": 0,
  "hash": "",
  "is_changed": 1,
  "create_dtime": 0,
  "is_doc": 0,
  "is_example": 0,
  mock: "{\r\n\t\"code\": \"0\",\r\n\t\"data\": {\r\n\t\t\"list|20\": [\r\n\t\t\t{\r\n\t\t\t\t\"name\": \"@name\",\r\n\t\t\t\t\"age\": \"@integer(2)\"\r\n\t\t\t}\r\n\t\t],\r\n\t\t\"url\": \"https://echo.apipost.cn\"\r\n\t},\r\n\t\"desc\": \"成功\"\r\n}"
,mock_url: "a",
  "url": "https://www.91beeshare.com/user/userstudy/wx/update/companycourse/play/count?a=1",
  "request": {
    "url": "https://www.91beeshare.com/user/userstudy/wx/update/companycourse/play/count",
    "description": "",
    "auth": {
      "type": "noauth",
      "kv": {
        "key": "",
        "value": ""
      },
      "bearer": {
        "key": ""
      },
      "basic": {
        "username": "",
        "password": ""
      }
    },
    "body": {
      "mode": "form-data",
      "parameter": [{
        "description": "",
        "is_checked": 1,
        "key": "courseGuid",
        "type": "Text",
        "not_null": "1",
        "field_type": "",
        "value": "764"
      }, {
        "description": "",
        "is_checked": 1,
        "key": "videoGuid",
        "type": "Text",
        "not_null": "1",
        "field_type": "",
        "value": "{{videoGuid}}"
      }],
      "raw": "",
      "raw_para": []
    },
    "event": {
      "pre_script": "",
      "test": ""
    },
    "header": {
      "parameter": [{
        "description": "",
        "is_checked": 1,
        "key": "cookie",
        "type": "Text",
        "not_null": "1",
        "field_type": "",
        "value": "SESSION=e3925551-c3be-4ad0-8427-9558f430af99; Path=/user/; Secure; HttpOnly",
      }, {
        "is_checked": 1,
        "type": "Text",
        "key": "",
        "value": "",
        "not_null": 1,
        "description": "",
        "field_type": "Text",
        "static": true,
      }]
    },
    "query": {
      "parameter": [{
        "is_checked": 1,
        "type": "Text",
        "key": "a",
        "value": "1",
        "not_null": 1,
        "description": "",
        "field_type": "Text",
      }, {
        "is_checked": 1,
        "type": "Text",
        "key": "",
        "value": "",
        "not_null": 1,
        "description": "",
        "field_type": "Text",
        "static": true,
      }]
    },
    "cookie": {
      "parameter": []
    },
    "resful": {
      "parameter": []
    }
  },
  "response": {
    "success": {
      "raw": "",
      "parameter": []
    },
    "error": {
      "raw": "",
      "parameter": []
    }
  },
  "is_locked": -1,
  "is_save": 1,
  "requestTab": 3,
  "preScriptShowRaw": true,
  "preScriptLayout": {
    "width": 300
  }
}
class HttpRequest extends window.XMLHttpRequest {
  constructor() {
    super(...arguments);
    this._url = "";//url
    this._params = undefined;//url 参数
    this.method = ""//请求方式
    this.onreadystatechange = null;
    let responseText = "";
    Object.defineProperty(this, "responseText", {
      get() {
        return responseText
      },
      set(v) {
        responseText = v
      }
    })
  }
  send() {
    //post 发送数据
    const arr = [...arguments];
    if (arr[0]) {
      // console.log(this._url)
      // console.log(arr, arguments)
      // console.log('=======send========')
      // const params = window.prompt(`———————————— 接口地址 ————————————\n${this._url}\n————————————    参数    ————————————\n${_deCode(arr[0]).join("\n")}`,arr[0]);
      // if(params!==null){
      //     arr[0]=params
      // }
    }
    return super.send(...arr)
  }
  open() {
    const arr = [...arguments];
    //创建请求
    const url = arr[1];
    this.method = arr[0]
    if (url) {
      const [path, params] = url.split(/\?/);
      this._url = path;
      if (params) {
        this._params = queryURLParams(params)
      }
    }
    //拦截请求结果
    let fn = this.onreadystatechange;
    Object.defineProperty(this, "onreadystatechange", {
      set(v) {
        fn = v;
      }
    });
    super.onreadystatechange = () => {
      this.responseText = super.responseText
      if (this.readyState === 4 && this.status === 200) {
        const responseText = super.responseText;
        if (responseText) {

          // const res = window.prompt(`———————————— 接口地址 ————————————\n${this._url}\n————————————  返回值  ————————————\n${responseText.slice(0,50)+(responseText.length>50?'...':"")}`,responseText);
          // if(res!==null){
          //     this.responseText=res
          // }else {
          //     this.responseText=super.responseText
          // }
        } else {
          this.responseText = super.responseText
        }
      }
      if (fn) fn();
    };
    return super.open(...arr)
  }
}
function _deCode(params) {
  return params.split("&").map((a) => {
    const [key, value] = a.split("=");
    if (!key) return "";
    return decodeURIComponent(key) + "=" + decodeURIComponent(value)
  })
}
window.XMLHttpRequest = HttpRequest;



//重写post

//重写url参数

//重写结果

//URL参数转JSON
function queryURLParams(param) {

  let obj = {};

  let paramsA = param.split('=');
  let key = paramsA[0];
  let value = paramsA[1];

  if (obj[key]) {
    // 主要是在这里做了一下处理,判断值是不是一个数组
    obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
    obj[key].push(value);
  } else {
    obj[key] = value;
  }

  return obj
}
//JSON转URL参数
function parseParams(data) {
  try {
    var tempArr = [];
    for (var i in data) {
      var key = encodeURIComponent(i);
      var value = encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
}
//JSON转URL参数
function jsonToUrlParam(json) {
  return new URLSearchParams(json).toString();
}
