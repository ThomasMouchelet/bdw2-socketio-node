import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("hello", (data) => {
    console.log("hello message received from client:", data);
  });

  socket.on("sendMessageFromClient", (data) => {
    console.log("message received from client:", data);
    io.emit("sendMessageServerToClient", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
