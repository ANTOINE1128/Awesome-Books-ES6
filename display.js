export function displayList() {
  document.querySelector('#book-list').style.display = 'block';
  document.querySelector('#book-form').style.display = 'none';
  document.querySelector('#contact').style.display = 'none';
}

export function displayForm() {
  document.querySelector('#book-list').style.display = 'none';
  document.querySelector('#book-form').style.display = 'block';
  document.querySelector('#contact').style.display = 'none';
}

export function displayContact() {
  document.querySelector('#book-list').style.display = 'none';
  document.querySelector('#book-form').style.display = 'none';
  document.querySelector('#contact').style.display = 'block';
}
