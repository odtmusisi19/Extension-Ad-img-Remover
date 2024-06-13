chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    executeScript(tab.id);
  }
});

function executeScript(tabId) {
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    function: executeInPage
  });
}

function executeInPage() {
  // Web Drive Bluray script
  document.querySelectorAll('img[title="Ads"]').forEach(function(img) {
    img.remove();
  });
  document.querySelectorAll('a').forEach(function(anchor) {
    if (anchor.textContent.trim() === "Download Game Nintendo Switch") {
      anchor.remove();
    }
  });

  // Web Ngefilm 21
  document.querySelectorAll('a[rel="nofollow noopener"]').forEach(function(anchor) {
    anchor.remove();
  });
  document.querySelectorAll('a[href="#close"]').forEach(function(anchor) {
    anchor.remove();
  });

  // Samehadaku
  document.querySelectorAll('img[style]').forEach(function(img) {
    if (img.style.height === "70px") {
        img.remove();
    }
  });
  // Movie ku & Melong
  document.querySelectorAll('img[height="79px"]').forEach(function(img) {
    img.remove();
  });
  document.querySelectorAll('img[height="90px"]').forEach(function(img) {
    img.remove();
  });

  // pesan Console
  console.log("Berhasil");
}
