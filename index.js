var index = 0;
// register callback when a request is finished
chrome.devtools.network.onRequestFinished.addListener((request) => {

  try {
    var url = request.request.url;
    //image name and its relative path
    var reg = /(\w*)\/([\w\(\)\-\@]*\.(gif|jpg|jpeg|png))/i;
    var image_part = url.match(reg);
    if (image_part) {
      index++;
      chrome.storage.sync.get({
        saveOperation: false,
        testMode: false
      }, function (items) {
        if (!items.saveOperation || (items.testMode && (index > 1))) {
          return;
        }
        chrome.downloads.download({
          url: url,
          conflictAction: 'overwrite',
          filename: extractHostFromUrl(url) + "/" + image_part[0],
          saveAs: false
        },
          function (id) {
          });
      });
    }

    // chrome.devtools.inspectedWindow.eval(
    //   'console.log("Image: " + unescape("' +
    //   escape(JSON.stringify(request.request.url)) +
    //   '|||' +
    //   image_part[0] +
    //   '"))');
  } catch (err) {
    chrome.devtools.inspectedWindow.eval(
      'console.log("ERROR:' + err.toString() + '")');
  }
});

function extractHostFromUrl(url) {
  var reg = /^([a-z][a-z0-9+\-.]*:\/\/([^/?#]+)?)?([a-z0-9\-._~%!$&'()*+,;=:@/]*)/i
  return url.match(reg)[2];
}