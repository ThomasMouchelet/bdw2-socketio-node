import "./style.css";
import { setupCounter } from "./counter.ts";
import { io } from "socket.io-client";
import { setupForm } from "./formMessage.ts";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("connected to server");
});

socket.emit("hello", "client connected");

socket.on("sendMessageServerToClient", (data) => {
  console.log("message received from server:", data);
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <form id="form">
      <input type="text" id="message" placeholder="message">
      <button type="submit" id="send">send</button>
    </form>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupForm(document.querySelector<HTMLFormElement>("#form")!);
