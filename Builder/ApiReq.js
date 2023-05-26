// Api request using builder patter

class RequestBuilder {
  constructor() {
    this.url = "";
    this.method = "GET";
    this.headers = {};
    this.params = {};
    this.body = null;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setHeaders(headers) {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  setParams(params) {
    this.params = { ...this.params, ...params };
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  build() {
    return {
      url: this.url,
      method: this.method,
      headers: this.headers,
      params: this.params,
      body: this.body,
    };
  }
}

// Usage:
const request = new RequestBuilder()
  .setUrl("https://api.example.com/users")
  .setMethod("POST")
  .setHeaders({ "Content-Type": "application/json" })
  .setParams({ page: 1, limit: 10 })
  .setBody({ name: "John Doe", email: "johndoe@example.com" })
  .build();

console.log(request);
