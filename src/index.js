import '../src/assets/scss/base.scss';
import * as Header from './modules/header';
import RenderHomeContent from './modules/home';
import RenderMenu from './modules/food_menu';


const clearContent = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
};

Header.loadHeader();


Header.homeNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  clearContent();
  RenderHomeContent();
});

Header.menuNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  clearContent();
  RenderMenu();
});


