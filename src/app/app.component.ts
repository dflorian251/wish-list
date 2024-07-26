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
  title = 'wish-list';
  newWishText ='';

  wishes:  WishItem[] = [
    new WishItem('Na parw kafe'),
    new WishItem('Na parw cafeihnh', true),
    new WishItem('Na parw mia Vespa Primavera', false),
  ];

  addNewWish() {
    // add the new created wish
    console.log(this.newWishText);
  }

  toogleWish(wish : WishItem) {
    wish.isComplete = !wish.isComplete;
    console.log(wish);
  }


}
