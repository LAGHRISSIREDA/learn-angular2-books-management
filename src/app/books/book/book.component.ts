import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
constructor(private carteService : CartService){

}

  @Input()
  book: Book = {} as Book;

  // @Output()
  // bookEmitter = new EventEmitter<Book>();

  addToCart() {
    this.carteService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }
}
