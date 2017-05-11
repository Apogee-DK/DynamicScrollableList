import {
  Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'dynamic-list',
  template: `
    <ul #container class="heroes" (updateList)="updateList()" scroll-update-list>
      <li *ngFor="let item of itemsToDisplay"
          [class.selected]="item === selectedItem"
          (click)="onSelect(item)">
        <span class="badge">{{item.id}}</span> {{item.name}}
      </li>
    </ul>
  `
})

export class DynamicListComponent implements OnInit {
  @Output() selection: EventEmitter<any> = new EventEmitter();
  @Input() items: Object[];
  @Input() loadAmount: number;

  selectedItem: Object;
  itemsToDisplay: Object[];


  ngOnInit() {
    this.itemsToDisplay = this.items.splice(0, this.loadAmount);
  }

  updateList(): void {
    this.itemsToDisplay = this.itemsToDisplay.concat(this.items.splice(0, this.loadAmount));
  }

  onSelect(item: Object) {
    this.selectedItem = item;
    this.selection.emit(item);
  }
}
;
