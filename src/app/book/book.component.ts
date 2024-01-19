import { Component } from '@angular/core'; // OnInit helps to retrieve data from local storage
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  id: number = 1;
  bookTitle: string = '';
  bookAuthor: string = '';
  bookList: Book[] = [];

  // Add book to local storage
  addBook() {
    if (this.bookTitle.trim().length && this.bookAuthor.trim().length) {
      const newBook: Book = {
        id: this.id++,
        title: this.bookTitle,
        author: this.bookAuthor
      }

      this.bookList.push(newBook);

      // Local storage activated to convert the array into a string
      localStorage.setItem("books", JSON.stringify(this.bookList));

      // Clear input field
      this.bookTitle = '';
      this.bookAuthor = '';

      console.log(newBook);

    } else {
      // If no input is collected
      alert('Invalid book');
    }
  }

  // Delete book
  deleteBook(index: number) {
    this.bookList.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.bookList));
  }

  // Retrieve book from local storage
  ngOnInit(): void {
    const savedBook = localStorage.getItem('books');
    this.bookList = savedBook ? JSON.parse(savedBook) : []
    }
}
