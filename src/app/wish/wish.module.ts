import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WishListItemComponent,
    AddWishFormComponent,
    WishlistComponent,
  ]
})
export class WishModule { }
