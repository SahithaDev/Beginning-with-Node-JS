const http = require("node:http");
const server = http.createServer(function (req, res) {
  if (req.url === "/getData") {
    return res.end("I will tell you later , hehe ");
  }
  res.end("Hi , you are in Sahitha's server");
});
server.listen(7777);
