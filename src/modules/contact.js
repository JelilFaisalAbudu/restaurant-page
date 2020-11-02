import '../assets/scss/contact.scss';

const contactContent = () => {
  const contentDiv = document.getElementById('content');
  const contactContentDiv = document.createElement('div');
  const contactHeaderEl = document.createElement('h2');
  const contactIntroEl = document.createElement('p');
  const contactText = 'Contact us for your home deliveries.';
  const contactNumEl = document.createElement('p');
  const contactNum = 'Call +23300000000';

  contentDiv.appendChild(contactContentDiv);
  contactContentDiv.classList.add('contact-container');
  contactContentDiv.appendChild(contactHeaderEl);
  contactHeaderEl.classList.add('heading', 'contact-heading');
  contactHeaderEl.textContent = 'Contact';
  contactContentDiv.appendChild(contactIntroEl);
  contactIntroEl.classList.add('contact-text');
  contactIntroEl.textContent = contactText;
  contactContentDiv.appendChild(contactNumEl);
  contactNumEl.textContent = contactNum;
  contactNumEl.classList.add('contact-num');
};

export default contactContent;