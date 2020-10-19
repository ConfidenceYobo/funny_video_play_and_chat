"use strict";

const express = require("express"),
  server = express(),
  path = require("path"),
  serveStatic = require("serve-static");

server.use(serveStatic(path.join(__dirname, "dist")));

const SERVER_PORT = process.env.PORT || 8090;
server.listen(SERVER_PORT, function () {
  console.log("Server is up and listening on port " + SERVER_PORT);
});
