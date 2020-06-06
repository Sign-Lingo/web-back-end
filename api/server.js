const bodyParser = require("body-parser");
const { ExpressOIDC } = require("@okta/oidc-middleware");
const session = require("express-session");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require(`morgan`);
const authRouter = require("../routes/authRouter"); // use until okta is set up
const levelsRouter = require("../routes/levelsRouter");
const server = express();
const { OKTA_DOMAIN, CLIENT_ID, CLIENT_SECRET, APP_BASE_URL, APP_SECRET } = process.env;

const oidc = new ExpressOIDC({
  issuer: `${OKTA_DOMAIN}/oauth2/default`,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  appBaseUrl: APP_BASE_URL,
  scope: 'openid profile',
  post_logout_redirect_uri: 'http://localhost:5000/logout/callback',
});

server.use(session({
  secret: APP_SECRET,
  resave: true,
  saveUninitialized: false,
}));

// main middleware
server.use(helmet.noSniff()); // Disables CORS from blocking images
server.use(morgan("combined"));
server.use(express.json());
server.use(cors());
server.use(oidc.router);
server.use(bodyParser.json());

// routes
server.use("/user", authRouter);
server.use("/levels", levelsRouter); // add OKTA middleware --> oidc.ensureAuthenticated(),

server.get("/", (req, res) => {
  res.send("IT'S WORKING!!!");
});

server.get('/logout', oidc.forceLogoutAndRevoke(), (req, res) => {
  // This is never called because forceLogoutAndRevoke always redirects.
});

module.exports = server;
