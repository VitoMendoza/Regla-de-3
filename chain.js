chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'js/jquery-3.2.1.js'
    }, function() {
        // Guaranteed to execute only after the previous script returns
        chrome.tabs.executeScript({
            file: 'popup/calculadora.js'
        });
    });
});