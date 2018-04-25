function onLoad() {
  chrome.storage.sync.get(['tim_js_name'], items => {
    if (items.tim_js_name) {
      document.getElementById('name').value = items.tim_js_name;
    }
  });

  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', save, true);
}

function save() {
  const name = document.getElementById('name').value;
  chrome.storage.sync.set({
    tim_js_name: name
  }, () => window.close());
}

window.onload = onLoad;
