# WebSocket Server with Heartbeat Check

This project implements a **WebSocket server** using the [`ws`](https://github.com/websockets/ws) library in Node.js.  
It includes a **heartbeat mechanism** to automatically detect and terminate dead client connections.

---

## 🚀 Features
- Simple WebSocket server running on **port 8080**.
- Implements a **heartbeat/ping-pong** mechanism:
  - Sends a ping to clients every **30 seconds**.
  - Clients must respond with a pong (handled automatically by most WebSocket libraries).
  - Dead or unresponsive connections are terminated.
- Logs client connection status.

---

## 📦 Installation

1. Clone this repository or copy the code.
2. Install dependencies:

```bash
npm install ws
