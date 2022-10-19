document.getElementById('submitBtn').addEventListener("click", loadSecret);
document.getElementById('generateBtn').addEventListener("click", putOutput);

function loadSecret() {
    let inp = document.getElementById('secret').value;
    chrome.storage.sync.set({secret: inp}, function() {
        console.log("SUS")
    });
}

function putOutput() {
    chrome.storage.sync.get(['secret'], function(result) {
        console.log(result.secret);
        let token = result.secret;
        let out = getToken(token, {period: 30});
        document.getElementById('output').innerHTML = out;
    });
}

function getSecret() {
    chrome.storage.sync.get(['secret'], function(result) {
        console.log(result.secret);
        return String(result.secret)
    });
}

function setSecret(newSecret) {
    chrome.storage.sync.set({secret: newSecret}, function() {
        console.log("SUS")
    });
}
