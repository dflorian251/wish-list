import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    CommonModule,
    WishModule
  ],
  bootstrap: [ ]
})
export class AppModule { }
