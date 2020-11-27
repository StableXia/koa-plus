const KoaPlus = require("../lib");

const server = new KoaPlus();

server.use((ctx, next) => {});

server.listen(3001);
