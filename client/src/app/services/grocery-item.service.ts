import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { GroceryItem } from '../models/grocery-item';
@Injectable({
  providedIn: 'root'
})
export class GroceryItemService {
  currentGroceryItem = this.socket.fromEvent<GroceryItem>('groceryItem');//put into currentGroceryItem element got by firing groceryItem event
  groceryList = this.socket.fromEvent<GroceryItem[]>('groceryItems');//define event sent from socket.io

  constructor(private socket: Socket) { }

  newGroceryItem(groceryItem){
    this.socket.emit('addGroceryItem', {id: GroceryItemService.generateRandomId(), item: groceryItem});
  }

  deleteGroceryItem(groceryItemId){
    this.socket.emit('removeFromGroceryList', {groceryItemId: groceryItemId})
  }

  static generateRandomId(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
