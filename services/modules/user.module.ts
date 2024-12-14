import type { ResponseDto } from "@/types/response";
import HttpFactory from "../factory";
import { IAuthForm, ISignUpLoginResponse } from "@/types/user/user.interface";
import { getClientOrServerUrl } from "@/lib/utils";

class UserModule extends HttpFactory {
  prefix: string = "";

  async signup(requestData: IAuthForm) {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "POST",
      url: `${getClientOrServerUrl()}${this.prefix}/create-user`,
      body: requestData,
    });
  }

  async login(requestData: IAuthForm) {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "POST",
      url: `${getClientOrServerUrl()}${this.prefix}/login`,
      body: requestData,
    });
  }
}

export default UserModule;
