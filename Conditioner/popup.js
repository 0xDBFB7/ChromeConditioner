document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.sync.get({'match': []}, function(obj) {
		var array = obj.match;
		document.getElementById('blocked').textContent = array;
    });
});

function block() {
	chrome.storage.sync.get({'match': []}, function(obj) {
		var array = obj.match;
		array.push(document.getElementsByName("block_word")[0].value)
		document.getElementById('blocked').textContent = array;
		chrome.storage.sync.set({"match": array});
    });
}


document.getElementById('block').onclick = block;