import { BehaviorSubject } from "rxjs";
import { IAccountInfo } from "./interface";
import { deleteToken, getToken } from "@/store/request/token";

/**
 * 登录账户
 */
class Account {
  readonly info$ = new BehaviorSubject<IAccountInfo | null>(null);

  login(userName: string, pwd: string) {
    // 登录成功之后将数据设置到info就可以触发登录信息的更新
    this.info$.next({
      userName,
    });
  }
  logout = () => {
    this.info$.next(null);
    if (getToken()) {
      // 调用退出登录接口
      //   race(
      //     of(true).pipe(delay(150)),
      //     from(request(authApi.Logout({}, {})))
      //   ).subscribe(() => {
      //     console.log("logout success");
      //   });
      deleteToken();
    }
  };
}

const accountService = new Account();

export default accountService;
