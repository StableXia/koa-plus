const http = require("http");
const context = require("./context");
const compose = require("./compose");

class KoaPlus {
  constructor() {}

  listen(...args) {
    const server = http.createServer((request, response) => {});

    server.listen(...args);
  }

  use() {}

  createContext(request, response) {
    const ctx = Object.create(context);

    return ctx;
  }
}

module.exports = KoaPlus;
