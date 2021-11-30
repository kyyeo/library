// declare an array of books
let myLibrary = [
  fiction = {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    image: "https://images-na.ssl-images-amazon.com/images/I/510xz1vMPNL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: true
  },
  nonFiction1 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: false
  },
  nonFiction2 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: true
  },
  nonFiction3 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: false
  },
  nonFiction4 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: true
  },
  nonFiction5 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: false
  },
  nonFiction6 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: true
  },
];

// function to create a book
function Book(title, author, image, pages, isRead) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.image = image,
  this.pages = page,
  this.isRead = isRead
}

// function to add a book to the library
function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

// select .shelf div
const shelf = document.querySelector('.shelf')

// take a book, and show its title and author
function showBook(book){
  // div to hold the book
  const div = document.createElement('div');
  // style with a CSS class
  div.classList.add('book');

  // create elements  
  const bookImage = document.createElement('img');
  const bookDetails = document.createElement('p');
  const bookAuthor = document.createElement('p');
  bookImage.src = book.image
  bookImage.alt = "Cover image for " + book.title
  bookImage.title = "Cover image for " + book.title
  book.isRead ? readStatus = "read" : readStatus = "unread" // ternary operator
  bookDetails.textContent = book.title + " by " + book.author + " has " + book.pages + " pages and is "  + readStatus + "."
  
  // create the buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  const removeBookBtn = document.createElement('button');
  removeBookBtn.textContent = "Remove this book"
  const readBookBtn = document.createElement('button');
  readBookBtn.textContent = "Finished reading?"
  buttonsDiv.appendChild(removeBookBtn)
  buttonsDiv.appendChild(readBookBtn)

  // append elements
  div.appendChild(bookImage)
  div.appendChild(bookDetails)
  div.appendChild(buttonsDiv)

  // add the new book to the shelf
  shelf.appendChild(div);
}

// function to display an array of library books
function displayLibrary(library) {
  for(let i = 0; i<library.length; i++){
    console.log(library[i])
    // console.log(library[i].author)
    // console.log(library[i].title)

    showBook(library[i])
  }
}

// show the library
displayLibrary(myLibrary);