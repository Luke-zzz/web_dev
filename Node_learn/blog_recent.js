const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("./title.json", (err, data) => {
        if (err) {
          console.log(err);
          res.end("Server Error");
        } else {
          const titles = JSON.parse(data.toString());
          fs.readFile("./blog.html", (err, data) => {
            if (err) {
              console.log(err);
              res.end("Server Error");
            } else {
              const tmp1 = data.toString();
              const html = tmp1.replace("%", titles.join("<li></li>"));
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(html);
            }
          });
        }
      });
    }
  })
  .listen(8000, "127.0.0.1");
