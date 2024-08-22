# Simple Tab Saver
Simple Tab Saver is a Chrome extension that can save and restore all tabs of your browser. Restoring tabs is restricted by a password field. The extension also works in incognito if enabled.


## Installation
To install the Simple Tab Saver extension:

Clone or download this repository to your local machine.
Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the directory where you downloaded the extension.
The Simple Tab Saver icon will appear in your Chrome toolbar.

## Usage
### Saving Tabs
Click the Simple Tab Saver icon in the Chrome toolbar.
Click the save tabs button and all tabs in the active window will be saved.
### Restoring Tabs
Click the Simple Tab Saver icon in the Chrome toolbar.
Enter the password you set in the code (see Configuration).
Click "Restore Tabs" to open all saved tabs

## Configuration
The default password (Azerty123) for restoring tabs is set in the popup.js file.

## Security Considerations
The password is stored in plain text within the extension's code, which is not secure for sensitive data.
Consider using a more secure method for storing passwords, such as encryption or integrating with a secure vault.

## Development
If you'd like to contribute or modify the extension:

Fork the repository.
Make your changes in a new branch.
Submit a pull request for review.

## File Structure
manifest.json: Configures the extension, including permissions and background scripts.
background.js: Manages tab saving and restoration.
popup.html: The HTML file for the popup interface.
popup.js: Handles user interaction and password validation.
icon.png: The icon displayed in the Chrome toolbar.

## License
This project is licensed under the MIT License.
