chrome.tabs.onUpdated.addListener(function(id, info, tab) {
	console.log('TAB:', tab)
  if (tab.url.toLowerCase().indexOf("youtube.com") > -1) {
    chrome.pageAction.show(tab.id);
  }
});