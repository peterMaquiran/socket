import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

function heartbeat() {
  this.isAlive = true;
}

wss.on("connection", (ws) => {
  ws.isAlive = true;
  ws.on("pong", heartbeat);

  ws.on("close", () => {
    console.log("❌ Client disconnected");
  });
});

// Check every 30 seconds if clients are alive
const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) {
      console.log("⚠️ Terminating dead connection");
      return ws.terminate();
    }

    ws.isAlive = false;
    ws.ping(); // send ping
  });
}, 30000);

wss.on("close", () => {
  clearInterval(interval);
});

console.log("✅ WebSocket server running on ws://localhost:8080");
