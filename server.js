const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Socket io connectionS
io.on("connection", (socket) => {
  console.log("a new user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  // Socket io event for new message
  socket.on("new message", (msg) => {
    console.log("new message" + msg);
  });
});

server.listen(3000, function () {
  console.log("Server listening on port 3000");
});
