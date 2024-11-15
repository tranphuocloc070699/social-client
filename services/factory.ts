interface IHttpFactory {
  method:
    | "GET"
    | "HEAD"
    | "PATCH"
    | "POST"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "OPTIONS"
    | "TRACE"
    | "get"
    | "head"
    | "patch"
    | "post"
    | "put"
    | "delete"
    | "connect"
    | "options"
    | "trace";
  url: string;
  fetchOptions?: RequestInit;
  body?: object;
  params?: any;
}

class HttpFactory {
  accessToken: string = "";

  constructor(accessToken?: string) {
    if (accessToken) this.accessToken = accessToken;
  }

  async call<T>({
                  method,
                  url,
                  fetchOptions,
                  body,
                  params
                }: IHttpFactory): Promise<T> {

    const headers = new Headers({
      ...(this.accessToken && {
        Authorization: `Bearer ${this.accessToken}`
      })
    });

    const options: RequestInit = {
      method,
      headers,
      cache: "no-store",
      ...fetchOptions
    };
    if (body) {
      if (body instanceof FormData) options.body = body as BodyInit;
      else {
        options.body = JSON.stringify(body);

        headers.set("Content-Type", "application/json");
        options.headers = headers;
      }
    }
    try {
      let newUrl = url;
      if (params) {
        newUrl = `${url}?${new URLSearchParams(params)}`;
      }
      const response = await fetch(newUrl, options);

      return await response.json();
    } catch (error) {
      throw new Error(`Fetch error: ${(error as Error).message}`);
    }
  }
}

export default HttpFactory;
