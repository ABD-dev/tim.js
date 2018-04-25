function onLoad() {
  const name = document.getElementsByTagName('span')[0];
  const removeLogoButton = document.getElementById('remove-logo');
  const fetchButton = document.getElementById('fetch');

  chrome.storage.sync.get(['tim_js_name'], items => {
    if (items.tim_js_name) {
      name.innerText = `${items.tim_js_name}`;
    } else {
      name.innerText = `tim.js`;
    }
  });

  removeLogoButton.addEventListener('click', removeLogo, true);
  fetchButton.addEventListener('click', fetch, true);
}

function removeLogo() {
  chrome.tabs.executeScript({
    code: `document.getElementById('ext-container').remove()`
  });
}

function fetch() {
  const ul = document.getElementById('result-list');
  chrome.tabs.executeScript(null, {file: 'crawler.js'});
  chrome.runtime.onMessage.addListener((data) => {
    if(data.length) {
      data.forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
        li.appendChild(document.createTextNode('Nothing found.'));
        ul.appendChild(li);
    }
  });
}

window.onload = onLoad;