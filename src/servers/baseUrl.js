const getBaseUrl = url => {
  let BASE_URL = "http://www.wanandroid.com";
  if (process.env.NODE_ENV === "development") {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    if (url.includes("/api/")) {
      BASE_URL = "";
    } else if (url.includes("/iatadatabase/")) {
      BASE_URL = "";
    }
  } else if (process.env.NODE_ENV === "loacl") {
    BASE_URL = "http:192.168.1.88:8888";
  } else {
    // 生产环境
    if (url.includes("/api/")) {
      BASE_URL = "";
    } else if (url.includes("/iatadatabase/")) {
      BASE_URL = "";
    }
  }
  return BASE_URL;
};

export default getBaseUrl;
