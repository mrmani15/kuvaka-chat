const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

// initializing socket with cors 
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT;

io.on("connection", (socket) => {
  socket.on("set-username", (username) => {
    // Associate the username with the socket
    socket.username = username;

    // broadcasting message when a new user joined
    socket.broadcast.emit("recieve-message", {
      msgType: "connection",
      message: `${socket.username} is joined`,
    });
  });

  //   broadcasting for new message to everyone except sender
  socket.on("send-new-message", (data) => {
    socket.broadcast.emit("recieve-message", {
      ...data,
      username: socket.username,
    });
  });

  //   broadcasting when any user is disconnected
  socket.on("disconnect", () => {
    socket.broadcast.emit("recieve-message", {
      msgType: "connection",
      message: `${socket.username} is disconnected`,
    });
  });
});

server.listen(PORT, () => console.log(`server running at port ${PORT}`));
