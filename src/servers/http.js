import Taro from "@tarojs/taro";
import getBaseUrl from "./baseUrl";
import interceptors from "./interceptors";

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

function showLoading(msg = "加载中...") {
  Taro.showLoading({
    title: msg
  });
}

function hideLoading() {
  Taro.hideLoading();
}

class httpRequest {
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    const BASE_URL = getBaseUrl(url);
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      header: {
        "content-type": contentType,
        Authorization: Taro.getStorageSync("Authorization")
      },
      mode: "cors" //允许跨域,需要java服务端允许
    };
    return Taro.request(option)
      .then(res => {
        hideLoading();
        //解析数据
        const errMsg = res.errMsg;
        if (res.errorCode === 0) {
          return Promise.resolve(res.data);
        }
        return Promise.reject(errMsg);
      })
      .catch(err => {
        hideLoading();
        return Promise.reject(err);
      });
  }

  get({url, data = "",loading=true}) {
    let option = { url, data };
    if(loading){
      showLoading();
    }
    return this.baseOptions(option);
  }

  post({url, data, contentType,loading = true}) {
    if(loading){
      showLoading();
    }
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  }

  put({url, data = "",loading = true}) {
    if(loading){
      showLoading();
    }
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete({url, data = "",loading = true}) {
    if(loading){
      showLoading();
    }
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }
}

export default new httpRequest();
