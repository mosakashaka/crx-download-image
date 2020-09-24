// Saves options to chrome.storage
function save_options() {
    var op = document.getElementById('op').checked;
    var test = document.getElementById('test').checked;
    chrome.storage.sync.set({
        testMode: test,
        saveOperation: op
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value saveOperation = false.
    chrome.storage.sync.get({
        testMode: false,
        saveOperation: false
    }, function (items) {
        document.getElementById('op').checked = items.saveOperation;
        document.getElementById('test').checked = items.testMode;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);