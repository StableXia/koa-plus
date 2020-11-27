/**
 * 中间件组合函数
 * @param {Function[]} middleware
 */
function compose(middleware) {
  if (!Array.isArray(middleware)) {
    throw new Error("middleware 必须是一个数组！");
  }

  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new Error("middleware 的元素必须是函数！");
  }

  return function (ctx) {
    return dispatch(0);

    function dispatch(i) {
      const fn = middleware[i];

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
