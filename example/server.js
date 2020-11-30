const KoaPlus = require("../packages/koa/lib");
const Router = require("../packages/router/lib");
const static = require("../packages/static/lib");

const server = new KoaPlus();
const router = new Router();

server.use(static(__dirname + "/public"));

router.get("/", (ctx) => {
  ctx.body = "index page";
});

server.use(router.routes());

server.listen(3001);
