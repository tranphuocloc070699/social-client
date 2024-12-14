import type { ResponseDto } from "@/types/response";
import HttpFactory from "../factory";
import { IAuthForm, ISignUpLoginResponse } from "@/types/user/user.interface";
import { getClientOrServerUrl } from "@/lib/utils";

class KeycapModule extends HttpFactory {
  prefix: string = "";

  async getAll() {
    return this.call<ResponseDto<ISignUpLoginResponse>>({
      method: "GET",
      url: `${getClientOrServerUrl()}${this.prefix}/list-keycap`,
    });
  }
}

export default KeycapModule;
