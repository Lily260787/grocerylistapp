import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroceryItemService } from 'src/app/services/grocery-item.service';
import { Subscription } from 'rxjs';
import { GroceryItem } from 'src/app/models/grocery-item';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit, OnDestroy {
  groceryItem: GroceryItem;
  private groceryItemSub: Subscription;
  constructor(private  groceryItemService: GroceryItemService) { }

  ngOnInit() {
    this.groceryItemSub = this.groceryItemService.currentGroceryItem.pipe(
      startWith({id: '', groceryItem: ''})//on init start with this object (so it's not empty)
    ).subscribe(groceryItem => this.groceryItem = groceryItem);//as soon as an event is triggered on currentGroceryItem do this
  }

  ngOnDestroy() {

  }

}
