chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "testContextMenu",
    contexts: ["page", "selection"],
  });

  //Creates a child menu
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "testContextMenu2",
    parentId: "testContextMenu",
    contexts: ["page", "selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("context menu clicked");
  console.log(info);
  console.log(tab);
});

console.log("background.js running");
