let btnBox = document.getElementById("btnBox")
let presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]

presetButtonColors.forEach(color => {
    let button = document.createElement("button")
    button.dataset.color = color
    button.style.background = color
    button.addEventListener("click", e => chrome.storage.sync.set({ color: e.target.dataset.color }))
    btnBox.appendChild(button)
})