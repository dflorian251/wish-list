import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../../shared/services/EventService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    FormsModule,
    WishFilterComponent,
    WishlistComponent,
    AddWishFormComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  wishes:  WishItem[] = [
    new WishItem('Na parw kafe'),
    new WishItem('Na parw cafeihnh', true),
    new WishItem('Na parw mia Vespa Primavera', false),
  ];

  filter : any = () => {};

  constructor() {
    events.listen('removeWish', (wish : any) => {
      let index = this.wishes.indexOf(wish);
      this.wishes.splice(index, 1);
    })
  }

}
