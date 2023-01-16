export const formBtn = document.querySelector("#form-button");
export const booksList = document.querySelector(".books-list");
export let books = JSON.parse(localStorage.getItem("books")) || [];

export class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const { id, title, author } = this;
    const bookObj = { id, title, author };
    if (books !== null) {
      books.push(bookObj);
      localStorage.setItem("books", JSON.stringify(books));
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
    }
  }

  removeBook() {
    const { id } = this;
    books = books.filter((book) => {
      console.log(books);
      if (book.id !== id) {
        return true;
      }
      return false;
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
