chrome.browserAction.onClicked.addListener(function(x){
	chrome.tabs.query({"windowType": "normal"}, function(tabs){
		for (tab of tabs){
			chrome.tabs.discard(tab.id);
		}
	});
});