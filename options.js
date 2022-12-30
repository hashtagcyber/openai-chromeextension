  document.getElementById('save').addEventListener('click', () => {
    const apiKey = document.getElementById('api-key').value;
    if (apiKey) {
      chrome.storage.local.set({ apiKey }, () => {
        alert('API key saved!');
      });
    }
  });
 