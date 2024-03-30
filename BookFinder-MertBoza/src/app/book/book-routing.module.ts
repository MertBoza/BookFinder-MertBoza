import { RouterModule, Routes } from "@angular/router";
import { AllBooksComponent } from "./all-books/all-books.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookComponent } from "./book.component";

const routes: Routes = [
    { path: '', component: BookComponent, children: [
        {path:'all-books',component:AllBooksComponent},
        {path:'book-details',component:BookDetailsComponent}
    ]
    }
  
];
export const BookRoutingModule = RouterModule.forChild(routes);
