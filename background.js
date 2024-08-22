// background.js
async function handleMessage(request, sender, sendResponse) {
	if(request.action==="restoreTabs"){
		console.log("Trying to restore tabs.")

		const { savedTabs } = await chrome.storage.local.get("savedTabs");
		if (savedTabs) {
			for (const url of savedTabs) {
				await chrome.tabs.create({ url});
			}
			return { message: "Restore tabs success." };
		} else {
			return { message: "Restore tabs failed." };
		}
	}

	if(request.action==="saveTabs"){
		console.log("Trying to save tabs.")

		const tabs = await chrome.tabs.query({ });
		const urls = tabs.map(tab => tab.url);
		await chrome.storage.local.set({ savedTabs: urls });
		return { message: "Saved tabs success." };
	}
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log("Listener triggered")
	handleMessage(request).then(sendResponse);
	return true; // return true to indicate you want to send a response asynchronously
});
