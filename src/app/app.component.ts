import { Component } from '@angular/core';
import { Item, itemList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31workshop';

  items: Item[] = itemList

  selectionBasket: Item[] = []

  addItemToCart(selection: Item){
    console.info('item >>>', selection)
     // if item was selected before
     const item = this.selectionBasket.find(i=> i.description == selection.description)

     // if item != null / true
     if(!!item)
     // add 1 to existing quantity
    //  item.quantity += selection.quantity
     item.quantity += 1
     else
     this.selectionBasket = [...this.selectionBasket, selection]
     // this.selectionBasket.push(selection)

   console.log(">>> selectionBasket", this.selectionBasket)
  }
}
