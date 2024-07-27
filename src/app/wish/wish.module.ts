import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WishListItemComponent,
    AddWishFormComponent,
    WishlistComponent,
    WishComponent,
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
