import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import events from '../../shared/services/EventService';
import { NgClass } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem;
  // @Input() wishText! : string;
  // @Input() fullfilled! : boolean;

  // @Output() fullfilledChange = new EventEmitter<boolean>();

  getCssClasses() {
    return this.wish.isComplete ? ['strikeout', 'text-muted'] : [];
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toogleWish() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
