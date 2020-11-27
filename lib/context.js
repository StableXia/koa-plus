module.exports = {
  /**
   * @description 获取 url
   */
  get url() {
    return this.request.url;
  },

  /**
   * @description 获取 body
   */
  get body() {
    return this.request.body;
  },

  /**
   * @description 设置 body
   */
  set body(val) {
    this.request.body = val;
  },

  /**
   * @description 获取 method
   */
  get method() {
    return this.request.method;
  },
};
