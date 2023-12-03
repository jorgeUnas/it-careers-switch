const heading = document.querySelector('h1');
const books = document.querySelector('#books');
const newBook = document.createElement('li');
const bookName = document.createTextNode('La rebelion en la granja');

newBook.appendChild(bookName);
books.appendChild(newBook);

const para = document.createElement('p');
const textPara = document.createTextNode('I am a new paragraph created in the DOM.');

para.appendChild(textPara);

books.appendChild(para);
heading.appendChild(para);