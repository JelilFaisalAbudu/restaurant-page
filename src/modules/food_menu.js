import '../assets/scss/food_menu.scss';
import Munsell from '../assets/images/alex-munsell.jpg';
import Brooke from '../assets/images/brooke-lark.jpg';
import Dan from '../assets/images/dan-gold.jpg';
import Dragne from '../assets/images/dragne-marius.jpg';
import Rachel from '../assets/images/rachel-park.jpg';
import SeaMeal from '../assets/images/res_menu.jpg';

const contentDiv = document.getElementById('content');
const menuContainer = document.createElement('div');
const row = document.createElement('div');

menuContainer.classList.add('menu-container', 'container-fluid');
menuContainer.appendChild(row);
row.classList.add('row');

const menuPics = [Munsell, Brooke, Dan, Dragne, Rachel, SeaMeal];
const foodMenu = () => {
  menuPics.forEach(pic => {
    const img = new Image();
    img.classList.add('menu-pic', 'col-12', 'col-md-6', 'col-lg-4', 'img-fluid');
    img.src = pic;
    row.appendChild(img);
  });
  contentDiv.appendChild(menuContainer);
};

export default foodMenu;