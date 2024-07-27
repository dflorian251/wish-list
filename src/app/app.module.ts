import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wish/wishlist/wishlist.component';
import { AddWishFormComponent } from './wish/add-wish-form/add-wish-form.component';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    CommonModule,
  ],
  bootstrap: [ ]
})
export class AppModule { }
