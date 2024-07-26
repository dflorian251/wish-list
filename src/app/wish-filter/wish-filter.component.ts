import { Component, OnInit, Output, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();

  listFilter : String = '0';

  filterChanged(value : any) {
    this.filter.emit(filters[value]);
  }

  ngOnInit() : void {
    this.filter.emit(filters[0]);
  }
}
