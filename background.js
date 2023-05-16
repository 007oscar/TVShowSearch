console.log("hello from background");

chrome.runtime.onInstalled.addListener((details) => {
  // console.log(details);
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log("🚀 ~ file: background.js:11 ~ chrome.contextMenus.onClicked.addListener ~ event:", event)
    chrome.search.query({
      disposition: "NEW_TAB",
      text: `imdb ${event.selectionText}`,
    })
  });

});

console.log("background script running")