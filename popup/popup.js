
const folders = new Set();

console.log("this is wworking");
let queryOptions = { lastFocusedWindow: true };

const tabs = await chrome.tabs.query(queryOptions);

const collator = new Intl.Collator();
// tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();
for (const tab of tabs) {
const element = template.content.firstElementChild.cloneNode(true);

const title = tab.title.split("-")[0].trim();

element.querySelector(".title").textContent = title;
element.querySelector("a").addEventListener("click", async () => {
    // need to focus window as well as the active tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
});

elements.add(element);
}
document.querySelector("ul").append(...elements);

document.getElementById("save_links").addEventListener("click", async () => {
    // need to focus window as well as the active tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
});