function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  let jsContainer = document.getElementsByClassName('js-container')[0];
  let text = document.createTextNode('Period.');
  let p = document.createElement('p');
  p.classList.add('salutation');
  p.classList.add('salutation--bg');
  p.classList.add('salutation--subtitle');
  p.appendChild(text);
  jsContainer.appendChild(p);
});
