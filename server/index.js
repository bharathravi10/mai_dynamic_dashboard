// Import the WebSocket library
const WebSocket = require('ws');

// Create the WebSocket server (assuming your server runs on port 8080)
const wsServer = new WebSocket.Server({ port: 8080 });

const generateRandomData = () => ({
  time: new Date().toISOString(),
  value: Math.floor(Math.random() * 100) + 1,
  category: `Category-${Math.floor(Math.random() * 5) + 1}` 
});

// WebSocket server logic
wsServer.on("connection", (connection) => {
  console.log("New WebSocket connection established");

  // Send data every 2 seconds
  const interval = setInterval(() => {
    const data = generateRandomData(); // Call the updated function here
    connection.send(JSON.stringify(data)); // Send the data to the client
  }, 2000);

  // Handle connection close
  connection.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  // Optional: Handle messages from the client
  connection.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
