putOutput()
document.getElementById('generateBtn').addEventListener("click", putOutput);
document.getElementById('copyToClipboard').addEventListener("click", copy);

function putOutput() {
    chrome.storage.sync.get(['secret'], function(result) {
        console.log(result.secret);
        let secret = result.secret;
        let out = getToken(secret, {period: 30});
        document.getElementById('output').innerHTML = out;
    });
}

function copy() {
    let otp = document.getElementById('output').innerHTML;
    navigator.clipboard.writeText(otp);
    document.getElementById('copyToClipboard').innerHTML = "copied!";
}
