const card = document.getElementById("card");
const newBook = document.getElementById("new_book");
const old_list = document.getElementById("list_book");
const close = document.getElementById("close");
const newBookForm = document.getElementById("form");

let myLibrary = [];

function Book(author, title, pages, read = false) {
  this.id = null;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  book.id = myLibrary.length;
  myLibrary.push(book);
}

function DisplayBook(book) {
  let bookContainer = document.createElement("div");
  bookContainer.id = book.id;
  bookContainer.className = "book_container";
  card.appendChild(bookContainer);

  let author = document.createElement("h3");
  author.className = "author";
  author.innerHTML = `Author : ${book.author}`;
  bookContainer.appendChild(author);

  let title = document.createElement("h3");
  title.className = "title";
  title.innerHTML = `Title : ${book.title}`;
  bookContainer.appendChild(title);

  let pages = document.createElement("h3");
  pages.className = "pages";
  pages.innerHTML = `Pages : ${book.pages}`;
  bookContainer.appendChild(pages);

  let read = document.createElement("input");
  read.className = "read";
  read.value = "Read";
  read.type = "checkbox";
  read.checked = book.read;
  bookContainer.appendChild(read);

  let label = document.createElement("label");
  label.className = "read_status";
  label.innerHTML = "Read";
  bookContainer.appendChild(label);

  let removeButton = document.createElement("button");
  removeButton.className = "removeBtn";
  removeButton.value = book.id;
  removeButton.innerHTML = "Remove";

  removeButton.onclick = deleteBook;
  bookContainer.appendChild(removeButton);
}

displayBooks(myLibrary);

newBook.addEventListener("click", function () {
  newBookForm.style.display = "block";
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  newBookForm.style.display = "none";
});

function deleteBook(e) {
  let index = myLibrary.findIndex((x) => x.id === e.target.value);
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

const createBook = document.getElementById("create_book");
createBook.addEventListener("click", function (e) {
  e.preventDefault();
  let author = document.getElementById("author_name").value;
  let title = document.getElementById("book_title").value;
  let pages = document.getElementById("pages").value;
  let read_status = document.getElementById("read_status").checked;

  let newBook = new Book(author, title, pages, read_status);
  addBookToLibrary(newBook);
  displayBooks(myLibrary);
});

function displayBooks(library) {
  card.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    DisplayBook(library[i]);
  }
}
