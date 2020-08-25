const card = document.getElementById("card");

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
book1 = new Book("author1", "title1", 111);

book2 = new Book("author2", "title2", 211);
book3 = new Book("author3", "title3", 311);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
function DisplayBook(book) {
  let author = document.createElement("h3");
  author.className = "author";
  author.innerHTML = `Author : ${book.author}`;
  card.appendChild(author);

  let title = document.createElement("h2");
  title.className = "title";
  title.innerHTML = `Title : ${book.title}`;
  card.appendChild(title);

  let pages = document.createElement("h3");
  pages.className = "pages";
  pages.innerHTML = `Pages : ${book.pages}`;
  card.appendChild(pages);

  let read = document.createElement("input");
  read.className = "read";
  read.value = "Read";
  read.type = "checkbox";
  read.checked = book.read;
  card.appendChild(read);

  let label = document.createElement("label");
  label.className = "read_status";
  label.innerHTML = "Read";
  card.appendChild(label);
}
myLibrary[1].read = true;
for (let i = 0; i < myLibrary.length; i++) {
  DisplayBook(myLibrary[i]);
}
