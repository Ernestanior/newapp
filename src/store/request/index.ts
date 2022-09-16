import RequestPlx from "@/common/tools/request";
import { deleteToken, getToken } from "@/store/request/token";
import { AxiosRequestConfig } from "axios";
import { notification } from "antd";

const requestPlx = new RequestPlx();

const dev_url = "http://localhost:10087/302-redirect";

export interface IResult {
  msg: string;
  code: number;
  data: any;
}
// add dev server url
requestPlx.middleware_before.use(async (config, next) => {
  if (process.env.NODE_ENV === "development") {
    config.url = dev_url + config.url;
  } else {
    config.url = "/302-redirect" + config.url;
  }
  await next();
});

// header add token
requestPlx.middleware_before.use(async (config, next) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers["token"] = token;
  }
  await next();
});

// analysis response status
requestPlx.middleware_after.use(async (rep, next) => {
  if (rep.status !== 200) {
    notification.error({
      message: rep.status,
      description: rep.statusText,
    });
    if (rep.status === 401 && getToken()) {
      // accountService.logout();
      deleteToken();
    }
    rep.data = null;
  }
  await next();
});

requestPlx.middleware_after.use(async (rep, next) => {
  if (rep.data) {
    if (!!rep.data.code && rep.data.code !== 200) {
      notification.error({
        message: rep.data.code,
        description: rep.data.msg,
      });
      if (rep.data.code === 401 && getToken()) {
        // accountService.logout();
        deleteToken();
      }
      // rep.data = null;
    }
    // else {
    //   rep.data = rep.data.data;
    // }
  }
  await next();
});

async function request(config: AxiosRequestConfig) {
  const rep = await requestPlx.request(config);
  // if(withCode){
  //   return rep
  // }
  return rep.data;
}

export default request;
