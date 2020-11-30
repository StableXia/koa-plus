/**
 * 中间件组合函数
 * @param {Function[]} middlewares
 */
function compose(middlewares) {
  if (!Array.isArray(middlewares)) {
    throw new Error("middlewares 必须是一个数组！");
  }

  for (const fn of middlewares) {
    if (typeof fn !== "function")
      throw new Error("middlewares 的元素必须是函数！");
  }

  return function (ctx) {
    return dispatch(0);

    function dispatch(i) {
      const fn = middlewares[i];

      if (!fn) {
        return Promise.resolve();
      }

      return Promise.resolve(
        fn(ctx, function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
}

module.exports = compose;
