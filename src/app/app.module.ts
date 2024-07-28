import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    CommonModule,
    WishModule,
    ContactComponent,
  ],
  bootstrap: [ ]
})
export class AppModule { }
