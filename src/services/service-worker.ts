import { onConnect, onMessage } from "./chromeApiService";

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

let conversationId = "";
type MessageRequest = {
  event: string;
  data: {
    conversationId: string;
  };
};

const onMessageListener = (
  request: MessageRequest,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) => {
  console.log(sender, request.event);

  sendResponse("received");
};

onMessage().addListener(onMessageListener);

const onConnectListener = (port: chrome.runtime.Port) => {
  console.log("Connected .....");
  port.onMessage.addListener((msg: MessageRequest) => {
    console.log("message recieved", msg.event);
  });
  port.onDisconnect.addListener(async () => {
    console.log("Port has been disconnected");
  });
};
onConnect().addListener(onConnectListener);
