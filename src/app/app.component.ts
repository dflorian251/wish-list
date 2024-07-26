import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgIf,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishes:  WishItem[] = [
    new WishItem('Na parw kafe'),
    new WishItem('Na parw cafeihnh', true),
    new WishItem('Na parw mia Vespa Primavera', false),
  ];

  listFilter : String = '0';
  newWishText ='';
  title = 'wish-list';
  visibleWishes : WishItem[] = this.wishes;

  addNewWish() {
    // add the new created wish
    this.wishes.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value : any) {
    if (value === '0') {
       this.visibleWishes = this.wishes;
    } else if (value === '1') {
      this.visibleWishes = this.wishes.filter(wish => !wish.isComplete);
    } else {
      this.visibleWishes = this.wishes.filter(wish => wish.isComplete);
    }
  }

  toogleWish(wish : WishItem) {
    wish.isComplete = !wish.isComplete;
    console.log(wish);
  }


}
