let btn = document.getElementById("btn")

chrome.storage.sync.get("color", data => {
    btn.style.background = data.color
})

btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function() {
            chrome.storage.sync.get("color", data => {
                document.body.style.background = data.color
            })
        }
    })
})