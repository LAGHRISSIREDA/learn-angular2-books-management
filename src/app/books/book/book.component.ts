import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {

  isInCart : boolean = false;

constructor(private carteService : CartService){
}

  @Input()
  book: Book = {} as Book;

  // @Output()
  // bookEmitter = new EventEmitter<Book>();

  addToCart() {
    this.isInCart = true;
    this.carteService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.carteService.remove(this.book);
  }
}
