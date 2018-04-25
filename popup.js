function onLoad() {
  const name = document.getElementsByTagName('span')[0];
  chrome.storage.sync.get(['tim_js_name'], items => {
    if (items.tim_js_name) {
      name.innerText = `${items.tim_js_name}`;
    } else {
      name.innerText = `tim.js`;
    }
  });
}

window.onload = onLoad;