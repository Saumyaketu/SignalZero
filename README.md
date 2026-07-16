#  SignalZero

> **A Decentralized Mesh Communication Platform for Disaster Recovery**
>
> SignalZero enables communication when traditional internet and cellular infrastructure is unavailable by simulating a decentralized mesh network with packet routing, emergency broadcasting, and real-time network analytics.

---

##  Overview

SignalZero is a real-time mesh communication platform that demonstrates how devices can communicate in disaster scenarios without relying on centralized servers.

Each connected client acts as an independent network node capable of:

- Joining a mesh network
- Discovering neighboring nodes
- Routing packets through intermediate nodes
- Sending direct messages
- Broadcasting emergency alerts
- Monitoring live network statistics

The project visualizes packet routing and network topology while simulating core concepts of decentralized communication systems.

---

##  Features

###  Mesh Network Simulation

- Dynamic node registration
- Automatic topology generation
- Neighbor discovery
- Live network visualization using React Flow

---

###  Intelligent Packet Routing

- Breadth First Search (BFS) routing
- Multi-hop packet forwarding
- Packet lifecycle simulation
- Hop-by-hop traversal

---

###  Direct Messaging

- Node-to-node communication
- Live chat between selected mesh peers
- Packet delivery simulation
- Automatic scrolling
- Sender identification
- Toggle between normal chat and emergency broadcast from the chat panel

---

###  Emergency Broadcast

- Broadcast alerts to every connected node
- Emergency alert history
- Real-time synchronization
- Priority disaster communication
- Dedicated emergency panel with broadcast input and alert history
- Sidebar and in-panel toggle between Chat and Emergency modes

---

###  Live Network Analytics

Monitor:

- Connected Nodes
- Packets Sent
- Packets Delivered
- Average Latency
- Average Hop Count

Updated in real time through Socket.IO.

---

###  Interactive Network Visualization

Built using React Flow.

Features include:

- Live mesh graph
- Dynamic topology updates
- Animated packet movement
- Node status indicators
- Active routing visualization

---

##  Architecture

```
                Socket.IO Server
                      │
      ┌───────────────┼───────────────┐
      │               │               │
   Node-1         Node-2         Node-3
      │               │               │
      └────────── Mesh Network ───────┘
                      │
                BFS Routing Engine
                      │
                Packet Processing
                      │
                Real-time Analytics
```

---

## 🛠 Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Flow
- Zustand
- Socket.IO Client
- Framer Motion
- Lucide React

### Backend

- Node.js
- Express.js
- Socket.IO
- UUID

---

##  Current UI Behavior

- Sidebar includes `Chat` and `Emergency` mode selectors.
- `Chat` mode renders node-to-node messaging and peer selection.
- `Emergency` mode renders a broadcast alert input and global alert history.
- The chat panel includes an in-panel toggle for Chat/Emergency switch.
- Emergency alerts are emitted over `emergency:broadcast` and synchronized in real time.


---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/SignalZero.git
cd SignalZero
```

---

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on

```
http://localhost:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on

```
http://localhost:5173
```

---

##  Usage

1. Open multiple browser tabs.

2. Each tab automatically joins the mesh network.

3. Use the sidebar to switch between `Chat` and `Emergency` modes.

4. In `Chat` mode, select another node and send direct messages.

5. In `Emergency` mode, send a broadcast alert to all connected nodes.

6. Watch packets travel through the network and monitor live analytics.

7. Emergency alerts are stored in the emergency alert history panel.

---

##  Screenshots

Add screenshots here.

Example:

```
screenshots/

dashboard.png

chat.png

mesh.png

analytics.png

emergency.png
```

---

##  Routing Algorithm

SignalZero uses **Breadth First Search (BFS)** to determine the shortest available route between two nodes.

Example:

```
Node-1

↓

Node-2

↓

Node-4

↓

Node-6
```

The computed path is attached to each packet and traversed hop-by-hop.

---


##  Analytics

Real-time metrics include:

- Nodes Online
- Packets Sent
- Packets Delivered
- Average Latency
- Average Hop Count

---

##  Emergency Broadcast

Allows one node to instantly notify every connected node.

Typical use cases:

- Fire Alerts
- Medical Emergencies
- Flood Warnings
- SOS Requests
- Resource Announcements

---

##  Future Enhancements

- Offline Store-and-Forward Messaging
- File Transfer over Mesh
- End-to-End Encryption
- Bulletin Board
- Resource Sharing
- Offline Node Recovery
- Packet Loss Simulation
- Network Failure Simulation
- Multi-path Routing
- A* Routing Support
- Mobile Support (React Native)

---

##  Contributing

Contributions are welcome.

Feel free to fork the repository, create a new branch, and submit a pull request.

---

##  Author

**Saumyaketu Chand Gupta**

B.Tech CSE, IIIT Kota

GitHub: https://github.com/Saumyaketu

---