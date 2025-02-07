const http = require("http");
const myfun = require("./mymod");

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.write("<h1>Hello word this is our first node server</h1>");
    resp.write("<p>Backend is running </p>");
    resp.write("<button>Click on me</button>");
    var mf = myfun(5, 7, 8);
    console.log(mf);
    resp.write("mf  " + mf);
    resp.end("ok bye bye");
  })
  .listen(9898);
