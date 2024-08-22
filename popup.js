// popup.js

const correctPassword = "Azerty123";  // Replace with your desired password
const messageElement = document.getElementById("message");

function handleResponse(response) {
	messageElement.style.color = "black";
	messageElement.textContent = response.message;
	console.log(`Response: ${response.message}`);
}

function handleError(error) {
	messageElement.style.color = "red";
	messageElement.textContent = error;
	console.log(`Error: ${error}`);
}

function restoreTabs() {
	const sending = chrome.runtime.sendMessage({
		action: "restoreTabs",
	});
	sending.then(handleResponse, handleError);
}

function saveTabs() {
	const sending = chrome.runtime.sendMessage({
		action: "saveTabs",
	});
	sending.then(handleResponse, handleError);
}


document.getElementById("restoreButton").addEventListener("click", async () => {
	const enteredPassword = document.getElementById("password").value;
	
	messageElement.textContent = "";
	if (enteredPassword === correctPassword) {
		restoreTabs();
	} else {
		messageElement.textContent = "Incorrect password.";
		messageElement.style.color = "red";
	}
});

document.getElementById("saveButton").addEventListener("click", async () => {
	saveTabs();
});