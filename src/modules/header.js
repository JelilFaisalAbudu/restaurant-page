import '../assets/scss/header.scss';

const body = document.querySelector('body');
const content = document.getElementById('content');
const header = document.createElement('header');
header.classList.add('header');

const nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand-md');

header.appendChild(nav);

const navbarBrand = document.createElement('a');
navbarBrand.href = '#';
navbarBrand.classList.add('navbar-brand');
navbarBrand.textContent = 'EDIN';
nav.appendChild(navbarBrand);

const navbarToggler = document.createElement('button');
navbarToggler.classList.add('navbar-toggler');
const navbarTogglerAttr = {
  type: 'button',
  toggle: 'collapse',
  target: '#navBarNav',
};

Object.keys(navbarTogglerAttr).forEach(attr => {
  if ((attr === 'type')) {
    navbarToggler.setAttribute(`${attr}`, `${navbarTogglerAttr[attr]}`);
  } else {
    navbarToggler.setAttribute(`data-${attr}`, `${navbarTogglerAttr[attr]}`);
  }
});

const navbarTogglerIcon = document.createElement('span');
navbarTogglerIcon.classList.add('navbar-toggler-icon');
navbarToggler.appendChild(navbarTogglerIcon);
nav.appendChild(navbarToggler);

const navbarCollapse = document.createElement('div');
navbarCollapse.classList.add('collapse', 'navbar-collapse');
navbarBrand.id = 'navBarNav';

const navbarNav = document.createElement('div');
navbarNav.classList.add('navbar-nav');

const homeNavLink = document.createElement('a');
const menuNavLink = document.createElement('a');
const aboutNavLink = document.createElement('a');
const contactNavLink = document.createElement('a');

const navbarNavItems = [homeNavLink, menuNavLink, aboutNavLink, contactNavLink];
const navbarNavItemsTexts = ['home', 'menu', 'about', 'contact'];

for (let i = 0; i < navbarNavItems.length; i += 1) {
  const navLink = navbarNavItems[i];
  navLink.textContent = navbarNavItemsTexts[i];
  navLink.href = '#';
  navLink.id = navbarNavItemsTexts[i];
  navLink.classList.add('nav-link');
  navbarNav.appendChild(navLink);
}

navbarCollapse.appendChild(navbarNav);
nav.appendChild(navbarCollapse);

const loadHeader = () => {
  body.insertBefore(header, content);
};

export {
  loadHeader, homeNavLink, menuNavLink, aboutNavLink, contactNavLink,
};
