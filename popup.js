document.addEventListener('DOMContentLoaded', function() {
  const actionButton = document.getElementById('actionButton');
  
  actionButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        function: changePageBackground
      });
    });
  });
});

function changePageBackground() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}
