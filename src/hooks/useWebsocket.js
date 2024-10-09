import { useEffect, useState } from "react";
import { URLS } from "../Api/constants";

export const useWebsocket = ({ setClipboardItems }) => {
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const connectWebSocket = () => {
      const websocket = new WebSocket(URLS.webSocket);

      websocket.onopen = () => {
        console.log("WebSocket connection established");
        setIsConnected(true);
      };

      websocket.onmessage = (event) => {
        const updatedItems = JSON.parse(event.data);
        setClipboardItems(updatedItems);
      };

      websocket.onclose = () => {
        console.log("WebSocket connection closed. Attempting to reconnect...");
        setIsConnected(false);
        setTimeout(connectWebSocket, 2000);
      };

      websocket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      setWs(websocket);
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [ws]);

  return {
    isConnected,
    ws,
  };
};
