const addBtn = document.querySelector('#addButton');
const dialogForm = document.querySelector('#addForm');
const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');
const books = document.querySelector('.books');

const myLibrary = [];

document.addEventListener('click', (event) => {
    
    return (event.target.id === 'addButton') ? dialogForm.showModal()
    : (event.target.id === 'submit') ? (event.preventDefault(), addBookToLibrary())
    : (event.target.id === 'cancel') ? dialogForm.close() 
    : (event.target.id === 'toggle') ? event.target.classList.toggle('read')
    : (event.target.id === 'remove') ? event.target.parentElement.remove()
    : '';
});

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}; 

function addBookToLibrary(){
    if (title.value != '' &&
        author.value != '' &&
        pages.value != ''){
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('#read').checked;
        let book = new Book(title, author, pages, read);
        myLibrary.push(book)
        dialogForm.close();
        
        const bookDiv = document.createElement('div');
        books.appendChild(bookDiv);

        const titleP = document.createElement('p');
        const authorP = document.createElement('p');
        const pagesP = document.createElement('p');
        const readP = document.createElement('h4');
        const remove = document.createElement('p');

        titleP.textContent = book.title;
        authorP.textContent = book.author;
        pagesP.textContent = book.pages;
        toggle = () => book.read === true ? readP.classList.toggle('read') : '';
        toggle();
        readP.id = 'toggle'
        remove.textContent = 'Delete';
        remove.id = 'remove';


        bookDiv.appendChild(titleP);
        bookDiv.appendChild(authorP);
        bookDiv.appendChild(pagesP);
        bookDiv.appendChild(readP);
        bookDiv.appendChild(remove);
    };
};