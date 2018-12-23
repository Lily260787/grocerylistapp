import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { GroceryItem } from '../models/grocery-item';
@Injectable({
  providedIn: 'root'
})
export class GroceryItemService {
  currentGroceryItem = this.socket.fromEvent<GroceryItem>('groceryItem');//put into currentGroceryItem element got by firing groceryItem event
  groceryItems = this.socket.fromEvent<string[]>('groceryItems');//define event sent from socket.io

  constructor(private socket: Socket) { }

  //link here events from socket.io
  getGroceryItem(itemId: string){
    this.socket.emit('getGroceryItem', itemId);
  }

  newGroceryItem(toto){
    //console.log("toto vaut "+toto);
    //console.log("currentGroceryItem vaut "+JSON.stringify(this.currentGroceryItem));
    //console.log("groceryItems vaut "+JSON.stringify(this.groceryItems));
    //console.log("socket vaut +"this.socket);
    this.socket.emit('addGroceryItem', {id: GroceryItemService.generateRandomId(), groceryItem: toto, bought: false});
  }

  static generateRandomId(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}