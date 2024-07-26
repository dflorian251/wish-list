import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    WishlistComponent,
    AddWishFormComponent,
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
  title = 'wish-list';
  // visibleWishes : WishItem[] = this.wishes;

  get visibleWishes() : WishItem[] {
    let value = this.listFilter;

    if (value === '0') {
      return this.wishes;
    } else if (value === '1') {
      return this.wishes.filter(wish => !wish.isComplete);
    } else {
      return this.wishes.filter(wish => wish.isComplete);
    }
  }

  filterChanged(value : any) {

  }
}
