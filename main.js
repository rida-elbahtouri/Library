const card = document.getElementById("card");
const newBook = document.getElementById("new_book");

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
  let bookContainer = document.createElement("div");
  bookContainer.id = book.id;
  allBooksContainer.appendChild(bookContainer);

  let author = document.createElement("h3");
  author.className = "author";
  author.innerHTML = `Author : ${book.author}`;
  bookContainer.appendChild(author);

  let title = document.createElement("h2");
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

newBook.addEventListener('click', function(){
  const newBookForm = document.getElementById("form");
  newBookForm.style.display = 'block';
});

function deleteBook(e) {
  myLibrary.splice(e.target.value, 1);
  console.log(myLibrary);
  // alert('Book deleted');
}

const createBook = document.getElementById("create_book");
createBook.addEventListener('click', function(e) {
  e.preventDefault();
  let author = document.getElementById("author_name").value;
  let title = document.getElementById("book_title").value;
  let pages = document.getElementById("pages").value;
  let read_status = document.getElementById("read_status").checked;

  let newBook = new Book(author, title, pages, read_status)
  addBookToLibrary(newBook);
  displayBooks(myLibrary);
});


function displayBooks(library) {
  const allBooksContainer = document.createElement("div");
  card.appendChild(allBooksContainer);
  for (let i = 0; i < library.length; i++) {
    allBooksContainer.appendChild(DisplayBook(library[i]));
  }
}
