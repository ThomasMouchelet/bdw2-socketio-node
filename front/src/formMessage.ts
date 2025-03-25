import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export function setupForm(element: HTMLFormElement) {
  element.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = element.message.value;
    socket.emit("sendMessageFromClient", {
      message,
      id: socket.id,
    });
  });
}
