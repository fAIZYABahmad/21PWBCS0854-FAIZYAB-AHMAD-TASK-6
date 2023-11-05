document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the elements
    const bookListUl = document.getElementById("book-list-ul");
    const addBookForm = document.querySelector(".add-book-form");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    // Create an array to store books
    let books = [];

    // Function to render the book list
    function renderBookList() {
        bookListUl.innerHTML = "";
        books.forEach(book => {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            bookListUl.appendChild(li);
        });
    }

    // Function to add a new book
    function addBook(title, author, isbn) {
        const newBook = { title, author, isbn };
        books.push(newBook);
        renderBookList();
    }

    // Event listener for adding a new book
    addBookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const isbn = document.getElementById("isbn").value;
        addBook(title, author, isbn);
        addBookForm.reset();
    });

    // Event listener for searching books
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase();
        const results = books.filter(book => {
            return (
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.isbn.includes(query)
            );
        });

        searchResults.innerHTML = "";
        results.forEach(result => {
            const li = document.createElement("li");
            li.textContent = `${result.title} by ${result.author} (ISBN: ${result.isbn})`;
            searchResults.appendChild(li);
        });
    });
});
