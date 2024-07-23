const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const outStream = fs.createWriteStream("ouput.js.gz");

fs.createReadStream("./node-stream.js").pipe(gzip).pipe(outStream);
