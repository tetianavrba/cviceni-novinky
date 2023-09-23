const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60rem';

const nadpisElement = document.querySelector('h1');
nadpisElement.className = 'news__title';

nadpisElement.textContent = 'Aktuální novinky';

const article1 = document.querySelector('#zprava1');
article1.classList.add('post--main');

const lastPictureElement = document.querySelector('#zprava3 .post__picture');
lastPictureElement.src = 'images/zprava3-novy.jpg';
