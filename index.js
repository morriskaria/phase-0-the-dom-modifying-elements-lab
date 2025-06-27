var main = document.getElementById('main');
main.remove();

var newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Karia is the champion';

document.body.appendChild(newHeader);

// Make newHeader global for tests (browser and Node.js)
window.newHeader = newHeader;
global.newHeader = newHeader;