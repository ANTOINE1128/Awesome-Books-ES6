import { DateTime } from 'luxon';
import { Store } from './storage.js';
import { UI } from './UI.js';
import { displayList, displayForm, displayContact } from './display.js';

// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert('Book Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const currentDate = document.getElementById('current-date');
  const date = DateTime.now().toLocaleString();
  if (currentDate) {
    currentDate.textContent = date;
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Removed', 'success');
});

document.querySelector('.list').addEventListener('click', () => {
  displayList();
});

document.querySelector('.add').addEventListener('click', () => {
  displayForm();
});

document.querySelector('.contact-page').addEventListener('click', () => {
  displayContact();
});
