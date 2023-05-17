console.log("hello from content script");

const aTags = document.getElementsByTagName("a")

for(const tag of aTags){
  tag.textContent = "Hello World"

}