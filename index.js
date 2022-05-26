console.log("hello");
const data = [
  { name: "Anurag", Contact: "99999" },
  { name: "Rahul", Contact: "98887" },
  { name: "Rohit", Contact: "99000" },
  { name: "Sachin", Contact: "96666" },
];
const http = require("http");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end()
  })
  .listen(3000);
