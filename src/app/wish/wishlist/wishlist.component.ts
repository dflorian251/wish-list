import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItem';;
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';


@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    WishListItemComponent,
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  @Input() wishes : WishItem[] = [];

  ngOnInit(): void {

  }
}
