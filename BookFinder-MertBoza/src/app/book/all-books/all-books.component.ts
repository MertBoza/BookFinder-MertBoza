import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  searchQuery: string = '';
  searchBy: string = 'title';

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.loading = true; 
    this.bookService.getRandomBooks()
      .subscribe(
        (data: any) => {
          console.log("API Response:", data); 
          if (data && data.items && data.items.length > 0) {
            this.books = data.items.slice(0, 9);
            this.error = null; 
          } else {
            this.books = [];
            this.error = 'No books found.';
          }
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching random books:', error);
          this.error = 'Failed to fetch books. Please try again later.';
          this.books = []; 
          this.loading = false;
        }
      );
  }

  search(): void {
    this.loading = true;
    this.bookService.searchBooks(this.searchQuery, this.searchBy)
      .subscribe(
        (data: any) => {
          if (data && data.items && data.items.length > 0) {
            this.books = data.items;
            this.error = '';
          } else {
            this.books = [];
            this.error = 'No books found.';
          }
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching search results:', error);
          this.error = 'Failed to fetch search results. Please try again later.';
          this.books = [];
          this.loading = false;
        }
      );
  }
}
