'use strict';

console.log(`location.href`, location.href);
console.log(`location.pathname`, location.pathname);
console.log(`chrome`, chrome);
console.log(`chrome.extension`, chrome.extension);
console.log(`chrome.runtime`, chrome.runtime);

const script = document.createElement('script');
script.setAttribute('type', 'module');
script.setAttribute('src', chrome.runtime.getURL('main.js'));

const head =
  document.head ||
  document.getElementsByTagName('head')[0] ||
  document.documentElement;
head.insertBefore(script, head.lastChild);

if (location.pathname === '/ApplicationArea/CargoTrackingBranches') {
  fetch(chrome.runtime.getURL('cargo.html'))
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.kt-portlet__body').innerHTML = data;
    })
    .catch((err) => console.error(err));
}
