import '../assets/scss/about.scss';

const aboutContent = () => {
  const contentDiv = document.getElementById('content');
  const aboutContentDiv = document.createElement('div');
  const aboutHeaderEl = document.createElement('h2');
  const aboutContentEl = document.createElement('p');
  const aboutText = 'A passionate team waiting for you everyday and every night!';

  contentDiv.appendChild(aboutContentDiv);
  aboutContentDiv.classList.add('about-container');
  aboutContentDiv.appendChild(aboutHeaderEl);
  aboutHeaderEl.classList.add('heading', 'about-heading');
  aboutHeaderEl.textContent = 'Who we are';
  aboutContentEl.classList.add('about-text');
  aboutContentEl.textContent = aboutText;
  aboutContentDiv.appendChild(aboutContentEl);
};

export default aboutContent;