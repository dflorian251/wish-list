import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wish/wishlist/wishlist.component';
import { AddWishFormComponent } from './wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish/wish-filter/wish-filter.component';
import events from '../shared/services/EventService';
import { WishComponent } from "./wish/wish.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    WishlistComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
