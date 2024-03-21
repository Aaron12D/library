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
    : '';
});

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}; 
function addElement(){
    const book = document.createElement('div');
    books.appendChild(book);

    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    
    title.textContent = title;

    book.appendChild(title);

}

function addBookToLibrary(){
    if (title.value != '' &&
        author.value != '' &&
        pages.value != ''){
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('#read').value;
        let book = new Book(title, author, pages, read);
        myLibrary.push(book)
        dialogForm.close();
        console.log(myLibrary)
        addElement();
    };
};