const div = document.createElement('div');
const img = document.createElement('img');
img.src = 'http://www.timjs.ro/assets/tim.js-logo.svg';
div.id = 'ext-container';
div.appendChild(img);

document.body.insertBefore(div, document.body.childNodes[0]);
