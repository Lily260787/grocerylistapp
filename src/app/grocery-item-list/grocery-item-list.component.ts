import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroceryItemService } from 'src/app/services/grocery-item.service';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-grocery-item-list',
  templateUrl: './grocery-item-list.component.html',
  styleUrls: ['./grocery-item-list.component.css']
})
export class GroceryItemListComponent implements OnInit, OnDestroy {
  toto: string = '';
  groceryItems: Observable<string[]>;
  currentGroceryItem: string;
  private groceryItemSub: Subscription; // I subscribe to all events concerning the groceryItemService

  constructor(private groceryItemService: GroceryItemService) { }

  ngOnInit() {
    this.groceryItems = this.groceryItemService.groceryItems;
    this.groceryItemSub = this.groceryItemService.currentGroceryItem.subscribe(groceryItem => this.currentGroceryItem = groceryItem.id);
  }

  ngOnDestroy() {
    this.groceryItemSub.unsubscribe();
  }

  loadGroceryItem(itemId: string){
    this.groceryItemService.getGroceryItem(itemId);
  }

  addNewGroceryItem(){
    console.log(this.toto);
    this.groceryItemService.newGroceryItem(this.toto);
  }


}
