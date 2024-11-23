export const connectWebSocket = (url, onMessage) => {
  const socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("Connected to WebSocket server");
  };

  socket.onmessage = (event) => {
    const parsedData = JSON.parse(event.data);
    if (onMessage) {
      onMessage(parsedData);
    }
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed");
  };
  return socket;
};
