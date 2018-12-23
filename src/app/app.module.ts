import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroceryItemListComponent } from './grocery-item-list/grocery-item-list.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryItemListComponent,
    GroceryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
