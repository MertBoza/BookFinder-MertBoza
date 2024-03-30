import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    BookComponent,
    AllBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
