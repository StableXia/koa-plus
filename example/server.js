const KoaPlus = require("../packages/koa");
const Router = require("../packages/router");
const static = require("../packages/static");

const server = new KoaPlus();
const router = new Router();

server.use(static(__dirname + "/public"));

router.get("/", (ctx) => {
  ctx.body = "index page";
});

server.use(router.routes());

server.listen(3001);
