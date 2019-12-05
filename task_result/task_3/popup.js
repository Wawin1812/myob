document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('click');
    button.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert("Hello..! The extension is working");
        });
    }, false);
}, false);