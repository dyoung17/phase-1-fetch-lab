function fetchBooks(){
fetch('https://anapioficeandfire.com/api/books')
.then(response => response.json())

}

function renderBooks(){
  books.forEach(book => {
    const main = document.querySelector('main');
    const h2 = document.createElement('h2');
    
    h2.innerHTML = book.name;
  
    main.appendChild(h2)
  });
}





document.addEventListener('DOMContentLoaded', fetchBooks);
