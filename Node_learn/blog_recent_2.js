// 解决回调过多的问题，减少嵌套函数

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    getTitle(res);
  })
  .listen(8000, "127.0.0.1");

function getTitle(res) {
  fs.readFile("./title.json", (err, data) => {
    if (err) {
      hasError(err, res);
    } else {
      getTemplate(JSON.parse(data.toString()), res);
    }
  });
}

function getTemplate(titles, res) {
  fs.readFile("./blog.html", (err, data) => {
    if (err) {
      hasError(err, res);
    } else {
      formatHtml(titles, data.toString(), res);
    }
  });
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace("%", titles.join("<li></li>"));
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}

function hasError(err, res) {
  console.log(err);
  res.end("Server Error");
}
