import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { NgClass } from '@angular/common';

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
  @Input() wishText! : string;
  @Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();

  getCssClasses() {
    return this.fullfilled ? ['strikeout', 'text-muted'] : [];
  }

  toogleWish() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
