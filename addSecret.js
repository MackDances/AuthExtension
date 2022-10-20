// Get the secret and set the status element.
chrome.storage.sync.get(['secret'], function(result) {
        if (result.secret) {
            // If the secret exists, set the status to "Secret is loaded".
            document.getElementById('status').innerHTML = "Status: Secret is loaded!";
            document.getElementById('status').style.color = "green";
        } else {
            // If the secret does not exist, set the status to "Secret is not loaded".
            document.getElementById('status').innerHTML = "Status: Secret is not loaded!";
            document.getElementById('status').style.color = "red";
        }
        // Add the input fields for setting a new secret.
        document.getElementById('addSecret').innerHTML = `<input id="newSecret"><button id="setSecret">Set Secret</button>`;
        // When the setSecret button is clicked, call the setSecretToStorage function.
        document.getElementById('setSecret').addEventListener("click", setSecretToStorage)
});

// This function sets the secret entered to the storage.
function setSecretToStorage() {
    // Get the secret that was entered and remove spaces.
    let inpSecret = document.getElementById('newSecret').value.replaceAll(" ", "")
    console.log(inpSecret);
    if (inpSecret == "") {
        // If the secret isn't entered, do not do anything.
        return;
    }
    // Set the secret to storage.
    chrome.storage.sync.set({secret: inpSecret}, function() {
        // After the secret is stored, set the status to "Secret is loaded".
        document.getElementById('status').innerHTML = "Status: Secret is loaded!";
        document.getElementById('status').style.color = "green";
        // Generate a new OTP.
        let otp = getToken(inpSecret, {period: 30});
        // remove the input and button and show new OTP instead.
        document.getElementById('addSecret').innerHTML = `<p>OTP is: ${otp}</p>`
    })
}
