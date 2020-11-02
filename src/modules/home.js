import '../assets/scss/home.scss';

const homeContent = () => {
  // const body = document.querySelector('body');
  const contentDiv = document.getElementById('content');
  const homeCaptionDiv = document.createElement('div');
  const homeCaptionEl = document.createElement('p');
  const homeCaption = 'have you tried our nutritious and delicious food varieties yet? visit us today!';

  contentDiv.appendChild(homeCaptionDiv);
  homeCaptionDiv.classList.add('home-caption-container');
  homeCaptionDiv.appendChild(homeCaptionEl);
  homeCaptionEl.textContent = homeCaption;
};

export default homeContent;