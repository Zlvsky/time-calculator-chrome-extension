// chrome.webRequest.onCompleted.addListener(
//   function (details) {
//     if (details.method == "GET") {
//       // Use this to access the response

//       console.log(details);
//     }
//   },
//   { urls: ["*://*.twitter.com/*"] },
//   ["responseHeaders"]
// );
chrome.devtools.network.onRequestFinished.addListener((request) => {
  request.getContent((body) => {
    if (request.request && request.request.url) {
      if (request.request.url.includes("twitter.com")) {
        console.log(request);
        chrome.runtime.sendMessage({
          response: body,
        });
      }
    }
  });
});
