import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey: string = 'AIzaSyCiA_B5vlrNQXJmtTBCUzbyn1L5MIhi4OA';

  constructor(private http: HttpClient) { }

  searchBooks(query: string, searchBy: string): Observable<any> {
    let url: string;
    if (searchBy === 'title') {
      url = `${this.apiUrl}?q=intitle:${query}&key=${this.apiKey}`;
    } else if (searchBy === 'author') {
      url = `${this.apiUrl}?q=inauthor:${query}&key=${this.apiKey}`;
    } else if (searchBy === 'isbn') {
      url = `${this.apiUrl}?q=isbn:${query}&key=${this.apiKey}`;
    } else {
      url = `${this.apiUrl}?q=${query}&key=${this.apiKey}`;
    }
    return this.http.get(url);
  }

  getRandomBooks(): Observable<any> {
    const randomPage = Math.floor(Math.random() * 50);
    const query = 'fiction'; 
    const url = `${this.apiUrl}?q=${query}&startIndex=${randomPage * 10}&maxResults=10&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getBookDetails(bookId: string): Observable<any> {
    const url = `${this.apiUrl}/${bookId}?key=${this.apiKey}`;
    return this.http.get(url);
  }
}
