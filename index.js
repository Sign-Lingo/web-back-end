require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log(`\n Server is running on localhost:${port} \n`);
});
