import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';;


@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  @Input() wishes : WishItem[] = [];

  toogleWish(wish : WishItem) {
    wish.isComplete = !wish.isComplete;
  }

  ngOnInit(): void {
  }
}
