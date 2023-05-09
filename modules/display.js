const displayList = () => {
  document.querySelector('#book-list').style.display = 'block';
  document.querySelector('#book-form').style.display = 'none';
  document.querySelector('#contact').style.display = 'none';
};

const displayForm = () => {
  document.querySelector('#book-list').style.display = 'none';
  document.querySelector('#book-form').style.display = 'block';
  document.querySelector('#contact').style.display = 'none';
};

const displayContact = () => {
  document.querySelector('#book-list').style.display = 'none';
  document.querySelector('#book-form').style.display = 'none';
  document.querySelector('#contact').style.display = 'block';
};
document.querySelector('.list').addEventListener('click', () => {
  displayList();
});

document.querySelector('.add').addEventListener('click', () => {
  displayForm();
});

document.querySelector('.contact-page').addEventListener('click', () => {
  displayContact();
});
export { displayContact, displayForm, displayList };