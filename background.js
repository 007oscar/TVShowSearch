console.log("hello from background");

chrome.runtime.onInstalled.addListener((details) => {
  // console.log(details);
  chrome.storage.local.set({ shows: [] });
  chrome.contextMenus.create({
    title: "Search Movies",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.create({
    title: "Speak Text",
    id: "contextMenu2",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(
      "🚀 ~ file: background.js:11 ~ chrome.contextMenus.onClicked.addListener ~ event:",
      event
    );
    if (event.menuItemId === "contextMenu1") {
      fetch(`http://api.tvmaze.com/search/shows/?q=${event.selectionText}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          chrome.storage.local.set({
            shows: data,
          });
        });
    } else if (event.menuItemId === "contextMenu2") {
      console.log("hello speaker");
      chrome.tts.speak(event.selectionText)
    }
  });
});
