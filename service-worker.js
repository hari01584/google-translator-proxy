console.log("This prints to the console of the service worker (background script)")

chrome.action.onClicked.addListener(function(tab) {
  console.log("Working????")
  chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['redirect.js']
  });
});
