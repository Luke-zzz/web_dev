const net = require("net");
const server = net.createServer((socket) => {
  // socket.on("data", (data) => {
  socket.once("data", (data) => {
    //响应单次,dat事件只被处理一次
    socket.write(data);
  });
});

server.listen(8888);
//socket 事件发射器,数据传回telnet 会话
//node echo_server.js
//telnet 127.0.0.1 8888
