import { Component, Input } from '@angular/core';
import { Item } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cart?: Item[]

  // can remove from Cart through Child with @Input from Parent
  removeItemFromCart(idx: number){
    this.cart?.splice(idx,1)
  }
}
