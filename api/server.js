const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require(`morgan`);

const userRouter = require("../routes/userRouter"); // use until okta is set up
const levelsRouter = require("../routes/levelsRouter");

const server = express();

server.use(helmet.noSniff()); // Disables CORB from blocking images
server.use(morgan("combined"));
server.use(express.json());
server.use(cors());

server.use("/user", userRouter);
server.use("/levels", levelsRouter);

server.get("/", (req, res) => {
  res.send("The Server is working ");
});

module.exports = server;
