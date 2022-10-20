chrome.storage.sync.get(['secret'], function(result) {
        if (result.secret) {
            document.getElementById('status').innerHTML = "Status: Secret is loaded!";
            document.getElementById('status').style.color = "green";
        } else {
            document.getElementById('status').innerHTML = "Status: Secret is not loaded!";
            document.getElementById('status').style.color = "red";
        }
        document.getElementById('addSecret').innerHTML = `<input id="newSecret"><button id="setSecret">Set Secret</button>`;
        document.getElementById('setSecret').addEventListener("click", setSecretToStorage)
});

function setSecretToStorage() {
    let inpSecret = document.getElementById('newSecret').value
    chrome.storage.sync.set({secret: inpSecret}, function() {
        document.getElementById('status').innerHTML = "Status: Secret is loaded!";
        document.getElementById('status').style.color = "green";
        let otp = getToken(inpSecret, {period: 30});
        document.getElementById('addSecret').innerHTML = `<p>OTP is: ${otp}</p>`
    })
}
