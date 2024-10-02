export async function sendMessage(message: any, options?: any): Promise<void> {
  try {
    await chrome.runtime.sendMessage(message, options);
  } catch (error) {
    console.error(error);
  }
}

export const getActiveTab = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};

export const executeScript = async ({
  target,
  func,
}): Promise<chrome.scripting.InjectionResult<unknown>[] | undefined> => {
  if (typeof func === "function") {
    return await chrome.scripting.executeScript({ target, func });
  }
};

export function storageLocal() {
  return chrome.storage.local;
}

export function storageOnChanged(): chrome.storage.StorageChangedEvent {
  return chrome.storage.onChanged;
}

export function runtimeConnect(
  connectInfo?: chrome.runtime.ConnectInfo
): chrome.runtime.Port {
  return chrome.runtime.connect(connectInfo);
}

export function onConnect(): chrome.runtime.ExtensionConnectEvent {
  return chrome.runtime.onConnect;
}

export function onMessage(): chrome.runtime.ExtensionMessageEvent {
  return chrome.runtime.onMessage;
}

export function onCommand(): chrome.commands.CommandEvent {
  return chrome.commands.onCommand;
}
