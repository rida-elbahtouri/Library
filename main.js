const card = document.getElementById('card');
const newBook = document.getElementById('new_book');
const close = document.getElementById('close');
const newBookForm = document.getElementById('form');

const myLibrary = [];

function Book(author, title, pages, read = false) {
  this.id = null;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

/* eslint func-names: ["error", "never"] */
Book.prototype.readStatus = function () {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
};

/* eslint no-use-before-define: ["error", { "functions": false }] */
function displayBooks(library) {
  card.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    DisplayBook(library[i]);
  }
}

function deleteBook(e) {
  const index = myLibrary.findIndex((x) => x.id === e.target.value);
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

function changeStatus(e) {
  const index = myLibrary.findIndex((x) => x.id === Number(e.target.className));
  myLibrary[index].readStatus();
}

function addBookToLibrary(book) {
  book.id = myLibrary.length;
  myLibrary.push(book);
}

function DisplayBook(book) {
  const bookContainer = document.createElement('div');
  bookContainer.id = book.id;
  bookContainer.className = 'book_container';
  card.appendChild(bookContainer);

  const author = document.createElement('h3');
  author.className = 'author';
  author.innerHTML = `Author : ${book.author}`;
  bookContainer.appendChild(author);

  const title = document.createElement('h3');
  title.className = 'title';
  title.innerHTML = `Title : ${book.title}`;
  bookContainer.appendChild(title);

  const pages = document.createElement('h3');
  pages.className = 'pages';
  pages.innerHTML = `Pages : ${book.pages}`;
  bookContainer.appendChild(pages);

  const read = document.createElement('input');
  read.className = book.id;
  read.value = 'Read';
  read.type = 'checkbox';
  read.onchange = changeStatus;
  read.checked = book.read;
  bookContainer.appendChild(read);

  const label = document.createElement('label');
  label.className = 'read_status';
  label.innerHTML = 'Read';
  bookContainer.appendChild(label);

  const removeButton = document.createElement('button');
  removeButton.className = 'removeBtn';
  removeButton.value = book.id;
  removeButton.innerHTML = 'Remove';

  removeButton.onclick = deleteBook;
  bookContainer.appendChild(removeButton);
}

displayBooks(myLibrary);

newBook.addEventListener('click', () => {
  newBookForm.style.display = 'block';
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  newBookForm.style.display = 'none';
});

const createBook = document.getElementById('create_book');
createBook.addEventListener('click', (e) => {
  e.preventDefault();
  const author = document.getElementById('author_name');
  const title = document.getElementById('book_title');
  const pages = document.getElementById('pages');
  const readStatus = document.getElementById('read_status');

  const newBook = new Book(author.value, title.value, pages.value, readStatus.checked);
  addBookToLibrary(newBook);
  displayBooks(myLibrary);

  author.value = '';
  title.value = '';
  pages.value = '';
  readStatus.checked = false;

  newBookForm.style.display = 'none';
});
