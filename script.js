// declare an array of books
let myLibrary = [
  fiction = {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    image: "https://images-na.ssl-images-amazon.com/images/I/510xz1vMPNL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: false
  },
  nonFiction1 = {
    title: "Blink",
    author: "Malcolm Gladwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Xvy4435cL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    pages: 200,
    isRead: false
  },
  nonFiction2 = {
    title: "Journey to the Center of the Earth",
    author: "Jules Verne",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389754903l/32829.jpg",
    pages: 200,
    isRead: false
  },
  nonFiction3 = {
    title: "Peter Pan",
    author: " J.M. Barrie",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337714526l/34268.jpg",
    pages: 200,
    isRead: false
  }
];

// function to create a book
function Book(title, author, image, pages, isRead) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.image = image,
  this.pages = pages,
  this.isRead = isRead
}

// function to add a book to the library
function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

// remove a book with data-indexNumber 
function removeBookFromLibrary(indexNumber){
  // at indexNumber, remove 1 entry from myLibrary array
  myLibrary.splice(indexNumber, 1);
}


// try creating a book
const nonFiction4 = new Book("The Art of Happiness", 
                            "His Holiness the Dalai Lama",
                            "https://m.media-amazon.com/images/I/51LZfA8ZIpL.jpg",
                            150,
                            false 
                            )

// try adding a book to the library 
// before displayLibrary() is called
addBookToLibrary(nonFiction4);


// select .shelf div
const shelf = document.querySelector('.shelf')

// take a book, and show its title and author
function showBook(book, bookIndex){

  // div to hold the book
  const div = document.createElement('div')
  div.classList.add('book');
  // for association purposes with removeBtn
  div.setAttribute('data-number', bookIndex)

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
  
  // remove btn
  const removeBookBtn = document.createElement('button');
  removeBookBtn.textContent = "Remove this book"
  removeBookBtn.classList.add('button-49')  
  removeBookBtn.addEventListener('click', () => {
    // alert(removeBookBtn.classList);
    removeBookFromLibrary(div.dataset.number);    
    refreshLibrary();
  })

  // read book btn
  const readBookBtn = document.createElement('button');
  readBookBtn.textContent = "Finished reading?"
  readBookBtn.classList.add('button-51')
  readBookBtn.addEventListener('click', () => {
    // alert(readBookBtn.classList);
    readBook(myLibrary[div.dataset.number]);    
    refreshLibrary();
  })

  // append btns
  buttonsDiv.appendChild(removeBookBtn)
  buttonsDiv.appendChild(readBookBtn)

  // append elements to the book
  div.appendChild(bookImage)
  div.appendChild(bookDetails)
  div.appendChild(buttonsDiv)

  // add the new book to the shelf
  shelf.appendChild(div);
}

// function to display an array of library books
function displayLibrary(library) {
  for(let i = 0; i<library.length; i++){
    // console.log(library[i])
    // console.log(library[i].author)
    // console.log(library[i].title)

    showBook(library[i], i)
  }
}

// function to change read status
function readBook(book){
  book.isRead = true
}

// find submitBook ID to "ADD A NEW BOOK"
const addNewBookBtn = document.querySelector('#submitBook')
addNewBookBtn.addEventListener('click', () => {
  // alert(addNewBookBtn.classList);
  let title = document.querySelector('#bookTitle').value
  let author = document.querySelector('#bookAuthor').value
  let image = document.querySelector('#bookImage').value
  let pages = document.querySelector('#bookPages').value
  let radioBtns = document.querySelectorAll('#bookIsRead')
  let isRead
  for(i=0; i<radioBtns.length; i++){
    if(radioBtns[i].checked) {
      isRead = radioBtns[i].value
    }
  }
  
  let newBook = new Book (title, author, image, pages, isRead);
  console.log(newBook);
  addBookToLibrary(newBook);
  showBook(newBook);
})

// show the library
displayLibrary(myLibrary);

// try adding another book after displayLibrary()
const nonFiction5 = new Book("A Brief History of Time", 
                            "Stephen Hawking",
                            "https://images-na.ssl-images-amazon.com/images/I/51xE6ZCQdqS._SX331_BO1,204,203,200_.jpg",
                            212,
                            false 
                            )

// add another book, and see if it gets displayed
addBookToLibrary(nonFiction5);
showBook(nonFiction5)

// function to "refresh" the library after add/remove book
function refreshLibrary(){
  // clean state
  while(shelf.firstChild){
    shelf.removeChild(shelf.lastChild);
  }

  // call function to show library
  displayLibrary(myLibrary);
}


// Get the modal
var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector(".button-53");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// extra function to close modal
function closeModal(){
  modal.style.display = "none";
}