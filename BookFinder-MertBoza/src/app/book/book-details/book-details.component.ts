import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const bookId = params['bookId'];
      if (bookId) {
        this.getBookDetails(bookId);
      }
    });
  }

  getBookDetails(bookId: string): void {
    this.bookService.getBookDetails(bookId)
      .subscribe(
        (data: any) => {
          this.book = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching book details:', error);
          this.error = 'Failed to fetch book details. Please try again later.';
          this.loading = false;
        }
      );
  }
}
