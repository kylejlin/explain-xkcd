chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  chrome.tabs.create({
    url:
      "https://www.explainxkcd.com/wiki/index.php/" + tab.url.replace(/\D/g, "")
  });
});
