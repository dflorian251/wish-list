import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    WishlistComponent,
    CommonModule,
  ],
  bootstrap: [ ]
})
export class AppModule { }
