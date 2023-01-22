import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'Harry Potter',
        actor: 'Daniel Radcliffe',
        image: 'https://m.media-amazon.com/images/I/91umWcRzVZL._SY500_.jpg',
        amount: 500,
      },
      {
        name: 'The Amazing Books',
        actor: 'Anonym',
        image: 'https://m.media-amazon.com/images/I/71N5h8G6DfS._AC_SL1500_.jpg',
        amount: 250,
      },
    ];
  }

  cart : Book[] = [];
}
