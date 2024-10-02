// Updated Wrapper for chrome.runtime.sendMessage
export async function sendMessage(
  message: any,
  options?: chrome.runtime.MessageOptions
): Promise<any> {
  try {
    const response = await chrome.runtime.sendMessage(message, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Wrapper for chrome.storage.local
export function storageLocal() {
  return chrome.storage.local;
}

// Wrapper for chrome.storage.onChanged
export function storageOnChanged(): chrome.storage.StorageChangedEvent {
  return chrome.storage.onChanged;
}

// Updated Wrapper for chrome.runtime.connect
export function runtimeConnect(
  connectInfo?: chrome.runtime.ConnectInfo
): chrome.runtime.Port {
  return chrome.runtime.connect(connectInfo);
}

// Wrapper for chrome.runtime.onConnect
export function onConnect(): chrome.runtime.ExtensionConnectEvent {
  return chrome.runtime.onConnect;
}

// Wrapper for chrome.runtime.onMessage
export function onMessage(): chrome.runtime.ExtensionMessageEvent {
  return chrome.runtime.onMessage;
}

// Wrapper for chrome.sidePanel.setPanelBehavior
// export function setPanelBehavior(): any {
//     return chrome.sidePanel.setPanelBehavior;
// }
