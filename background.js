console.log("hello from background");

chrome.runtime.onInstalled.addListener((details) => {
  // console.log(details);
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(
      "🚀 ~ file: background.js:11 ~ chrome.contextMenus.onClicked.addListener ~ event:",
      event
    );
    chrome.tabs.create({
      url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });
});

console.log("background script running");

chrome.storage.local.get(["text"], (res) => {
  console.log(res);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse("received message from background");
  chrome.tabs.sendMessage(sender.tab.id, "Got your message from background!");
});
