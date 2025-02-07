const url = require("url");
const http = require("http");
http
  .createServer((req, resp) => {
    console.log(req.url);

    const urlObj = url.parse(req.url, true);
    console.log(urlObj);
    console.log(urlObj.query.num1);
  })
  .listen(8082);
