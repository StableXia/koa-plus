const path = require("path");
const fs = require("fs");

async function send(ctx, filePath, opts) {
  try {
    filePath = path.join(opts.root, filePath);
    let stats = fs.statSync(filePath);

    if (stats.isFile()) {
      ctx.body = fs.readFileSync(filePath);
    } else {
      ctx.body = "404";
    }
  } catch (err) {
    throw err;
  }
}

module.exports = send;
