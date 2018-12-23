import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { GroceryItemListComponent } from './grocery-item-list/grocery-item-list.component';
import {FormsModule} from "@angular/forms";

const config: SocketIoConfig = { url: 'http://localhost:4400', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    GroceryItemListComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),//socket.io with config
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
