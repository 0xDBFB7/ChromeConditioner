chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
	chrome.storage.sync.get('match', function(obj) {
		var array = obj.match;
		for(var i in array){
	        if(tab.url.indexOf(array[i]) !== -1){
		  		var audio = new Audio(Math.floor((Math.random() * 2)+1).toString() + ".wav"); audio.play();
		  		chrome.tabs.remove(tabId);
	  		}
	  	}
    });
  }
})