const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const fileName = req.url === "/" ? "./index.html" : `.${req.url}.html`;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (err, data) => {
          if (err) {
            console.error(err);
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data);
          }
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(8080);
