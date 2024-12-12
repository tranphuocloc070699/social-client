import type { ResponseDto } from "@/types/response";
import HttpFactory from "../factory";
import { IAuthForm, ISignUpLoginResponse } from "@/types/user/user.interface";

class UserModule extends HttpFactory {
  prefix: string = "/api/v1";

  async signup(requestData: IAuthForm) {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "POST",
      url: `${this.prefix}/create-user`,
      body: requestData,
    });
  }

  async login(requestData: IAuthForm) {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "POST",
      url: `${this.prefix}/login`,
      body: requestData,
    });
  }

  async authenticate() {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "GET",
      url: `/api/user`,
    });
  }

  async logout() {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "PUT",
      url: `/api/user/log-out`,
    });
  }
}

export default UserModule;
