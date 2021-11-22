let myLibrary = [
  fiction = {
    title: "charlie and the chocolate factory",
    author: "roald dahl"
  },
  nonFiction = {
    title: "blink",
    author: "malcolm gladwell"
  }
];

function Book(title, author) {
  // the constructor...
  this.title = title,
  this.author = author
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

const shelf = document.querySelector('.shelf')

function showBook(book){
  const div = document.createElement('div');
  div.classList.add('book');
  div.style.height = 300;
  div.style.width = 300;

  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  bookTitle.textContent = book.title
  bookAuthor.textContent = book.author

  div.appendChild(bookTitle)
  div.appendChild(bookAuthor)

  shelf.appendChild(div);
}

function displayLibrary(library) {
  for(let i = 0; i<library.length; i++){
    console.log(library[i])
    // console.log(library[i].author)
    // console.log(library[i].title)

    showBook(library[i])
  }
}