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
