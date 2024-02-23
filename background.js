chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('youtube.com/watch')) {
        const queryParameter = tab.url.split('?')[1];
        if (queryParameter) {
            const urlParameter = new URLSearchParams(queryParameter);
            console.log(urlParameter);
            chrome.tabs.sendMessage(tabId, {
                type: "NEW",
                videoId: urlParameter.get('v')
            });
        }
    }
});