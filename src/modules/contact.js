import  '../assets/scss/contact.scss';

const contactContent = () => {
  const contentDiv = document.getElementById('content');
  const contactContentDiv = document.createElement('div');
  const contactHeaderEl = document.createElement('h2');
  let contactIntroEl = document.createElement('p');
  let contactText = 'Contact us for your home deliveries.';
  let contactNumEl = document.createElement('p');
  let contactNum = 'Call +23300000000';
  
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