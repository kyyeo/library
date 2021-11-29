// declare an array of books
let myLibrary = [
  fiction = {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    image: "https://images-na.ssl-images-amazon.com/images/I/510xz1vMPNL._SX258_BO1,204,203,200_QL70_ML2_.jpg"
  },
  nonFiction = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
  }
  
];

// function to create a book
function Book(title, author) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.image = image
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

  // create and append elements 
  const bookImage = document.createElement('img');
  const bookDetails = document.createElement('p');
  const bookAuthor = document.createElement('p');
  bookImage.src = book.image
  bookImage.alt = "Cover image for " + book.title
  bookImage.title = "Cover image for " + book.title
  bookDetails.textContent = book.title + " by " + book.author
  div.appendChild(bookImage)
  div.appendChild(bookDetails)

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