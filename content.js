'use strict';

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

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.type = 'text/css';
  css.href = chrome.runtime.getURL('cargo.css');
  head.appendChild(css);

  const confetti = document.createElement('script');
  confetti.setAttribute('src', chrome.runtime.getURL('confetti.min.js'));
  head.insertBefore(confetti, head.lastChild);
}
