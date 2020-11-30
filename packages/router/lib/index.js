class Router {
  constructor() {
    this.stack = [];
  }

  register(path, method, middleware) {
    this.stack.push({ path, method, middleware });
  }

  get(path, middleware) {
    this.register(path, "get", middleware);
  }

  post(path, middleware) {
    this.register(path, "post", middleware);
  }

  routes() {
    const stack = this.stack;

    return function (ctx, next) {
      let route;

      for (let i = 0; i < stack.length; i++) {
        let item = stack[i];

        if (item.path === ctx.url && item.method === ctx.method) {
          route = item.middleware;
          break;
        }
      }

      if (typeof route === "function") {
        route(ctx, next);
        return;
      }

      next();
    };
  }
}

module.exports = Router;
