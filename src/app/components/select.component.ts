import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { Item } from '../models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent{

@Input()
items!: Item[]

  // ?: is optional operator, means members can be null or undefined
  // !: is non-null assertion operator. Members cannot be null or undefined. 

@Output()
onNewItem = new Subject<Item>()


addToCart(item: Item){
  this.onNewItem.next(item)
}

}
