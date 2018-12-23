import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroceryItemService } from 'src/app/services/grocery-item.service';
import {Observable, Subscription} from "rxjs";
import {GroceryItem} from "../models/grocery-item";

@Component({
  selector: 'app-grocery-item-list',
  templateUrl: './grocery-item-list.component.html',
  styleUrls: ['./grocery-item-list.component.css']
})
export class GroceryItemListComponent implements OnInit, OnDestroy {
  groceryItem: string = '';//sent by NgModel
  groceryItems: Observable<string[]>;
  groceryList: Observable<GroceryItem[]>;
  currentGroceryItem: string;
  private groceryItemSub: Subscription; // I subscribe to all events concerning the groceryItemService
  checkboxValue: boolean;
  completedItem: boolean;
  constructor(private groceryItemService: GroceryItemService) { }

  ngOnInit() {
    this.groceryItemSub = this.groceryItemService.currentGroceryItem.subscribe(groceryItem => this.currentGroceryItem = groceryItem.id);
    this.groceryList = this.groceryItemService.groceryList;
  }

  ngOnDestroy() {
    this.groceryItemSub.unsubscribe();
  }

  addNewGroceryItem() {
    this.groceryItemService.newGroceryItem(this.groceryItem);
    this.groceryItem = '';
  }

  removeItem(id) {
    this.groceryItemService.deleteGroceryItem(id);
  }

  onCompletedItem(value:boolean){
    this.checkboxValue = value;
  }


}
