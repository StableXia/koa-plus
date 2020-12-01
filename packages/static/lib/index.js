const path = require("path");
const send = require("./send");

const DEFAULT_OPTIONS = {
  root: "",
  defer: false,
};

module.exports = (root, options) => {
  if (!root) {
    throw new Error("必须设置 root 文件夹");
  }

  const opts = Object.assign({}, DEFAULT_OPTIONS, options);
  opts.root = path.resolve(root);

  // 允许下游中间件先执行
  if (opts.defer) {
    return async (ctx, next) => {
      await next();
      await send(ctx, ctx.url, opts);
    };
  }

  return async (ctx, next) => {
    await send(ctx, ctx.url, opts);
    await next();
  };
};
