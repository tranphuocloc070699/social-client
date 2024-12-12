import type { ResponseDto } from "@/types/response";
import HttpFactory from "../factory";
import { IAuthForm, ISignUpLoginResponse } from "@/types/user/user.interface";

class KeycapModule extends HttpFactory {
  prefix: string = "/api/v1";

  async getAll() {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "GET",
      url: `${this.prefix}/list-keycap`,
    });
  }
}

export default KeycapModule;
