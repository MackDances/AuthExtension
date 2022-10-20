// When the extension is opened, automatically generate an OTP.
putOutput()
// If the generate button is pressed, generate an OTP.
document.getElementById('generateBtn').addEventListener("click", putOutput);
// If the copy button is pressed, copy the OTP.
document.getElementById('copyToClipboard').addEventListener("click", copy);

// This function sets the output element to display the OTP.
function putOutput() {
    // Get the secret from the storage.
    chrome.storage.sync.get(['secret'], function(result) {
        if (!result.secret) {
            // If the secret isn't present, put an error message as the output and disable the buttons and exit.
            document.getElementById('output').innerHTML = "The Secret has not been set.";
            document.getElementById('output').style.color = "red";
            document.getElementById('generateBtn').disabled = true;
            document.getElementById('copyToClipboard').disabled = true;
            return;
        }
        // Generate the OTP using the secret and the time seed of 30 seconds(standard).
        let secret = result.secret;
        let out = getToken(secret, {period: 30});
        // Set the output element to show the OTP.
        document.getElementById('output').innerHTML = out;
    });
}

// This function copies the OTP from the output element.
function copy() {
    // Get the OTP from the output element.
    let otp = document.getElementById('output').innerHTML;
    // Copy the OTP to the clipboard.
    navigator.clipboard.writeText(otp);
    // Change the button's text to say copied.
    document.getElementById('copyToClipboard').innerHTML = "copied!";
}
