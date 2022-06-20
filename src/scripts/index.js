import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// Fetch data json
/*
import('../DATA.json').then(({ default: jsonData }) => {
  console.log(jsonData);
  const datas = jsonData.restaurants;
  let dataList = '';
  datas.forEach((data) => {
    dataList += `
        <div class="list_item">
            <img class="list_item_thumb" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            <div class="city">${data.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating :
                    <a href="#" class="list_item_rating_value">${data.rating}</a>
                </p>
                <h1 class="list_item_title"><a href="#">${data.name}</a></h1>
                <div class="list_item_desc">${data.description.slice(0, 150)}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector('#tes').innerHTML = dataList;
});

// Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
*/
