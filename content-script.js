console.log("hello from content script");

const aTags = document.getElementsByTagName("a");

for (const tag of aTags) {
  if (tag.textContent.includes("i")) {
    tag.style = "background-color: yellow;";
  }
}
