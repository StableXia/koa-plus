const KoaPlus = require("../packages/koa");
const Router = require("../packages/router");
const static = require("../packages/static");

const server = new KoaPlus();
const router = new Router();

function delay(s) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
}

server.use(async (ctx, next) => {
  await next();
});

server.use(async (ctx, next) => {
  const { url } = ctx;
  console.log("end 123");
  if (url === "/") {
    await delay(10);
    ctx.body = "123";
    next();
  } else {
    next();
  }
});

server.use(static(__dirname + "/public"));

router.get("/", (ctx) => {
  ctx.body = "index page";
});

server.use(router.routes());

server.listen(3001);
