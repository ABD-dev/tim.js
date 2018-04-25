function onLoad() {
  const name = document.getElementsByTagName('span')[0];
  const removeLogoButton = document.getElementById('remove-logo');

  chrome.storage.sync.get(['tim_js_name'], items => {
    if (items.tim_js_name) {
      name.innerText = `${items.tim_js_name}`;
    } else {
      name.innerText = `tim.js`;
    }
  });

  removeLogoButton.addEventListener('click', removeLogo, true);
}

function removeLogo() {
  chrome.tabs.executeScript({
    code: `document.getElementById('ext-container').remove()`
  });
}

window.onload = onLoad;