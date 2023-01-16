import {
  Book, formBtn, booksList, books,
} from './Book.js';

import { DateTime } from './luxon/src/luxon.js';

const clockElement = document.getElementById('clock');
const clock = () => {
  clockElement.textContent = DateTime.now().toISO();
};
setInterval(clock, 1000);

const showBook = (id, title, author) => {
  const li = document.createElement('li');
  li.innerHTML = `<h2>"${title}"</h2>
    <h3> by ${author}</h3>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  li.appendChild(deleteBtn);
  booksList.appendChild(li);
  deleteBtn.addEventListener('click', () => {
    const book = new Book(id, title, author);
    id = deleteBtn.id;
    book.removeBook();
    li.remove();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now();
    const book = new Book(id, title, author);
    book.addBook();
    if (title && author) {
      showBook(book.id, book.title, book.author);
    }
  });
});

if (books !== null) {
  books.forEach((book) => {
    showBook(book.id, book.title, book.author);
  });
}

const booksTab = document.getElementById('books-tab');
const addTab = document.getElementById('addBook-tab');
const contactTab = document.getElementById('contact-tab');

booksTab.addEventListener('click', () => {
  document.getElementById('new-book').classList.remove('hide');
  document.getElementById('addBook-form').classList.add('hide');
  document.getElementById('contact-display').classList.add('hide');
});

addTab.addEventListener('click', () => {
  document.getElementById('new-book').classList.add('hide');
  document.getElementById('addBook-form').classList.remove('hide');
  document.getElementById('contact-display').classList.add('hide');
});

contactTab.addEventListener('click', () => {
  document.getElementById('new-book').classList.add('hide');
  document.getElementById('addBook-form').classList.add('hide');
  document.getElementById('contact-display').classList.remove('hide');
});
