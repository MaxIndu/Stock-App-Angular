import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

// Typescript Decorator
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})

/** 
 * <b>Angular’s <code>OnInit</code> hook is executed after the component is created by the Angular
 * framework, after all the data fields are initialized</b>. It is generally recommended to
 * do any initialization work of a component in the <code>OnInit</code> hook, so that it makes it
 * easier to test the functionality of the rest of the component without necessarily
 * triggering the initialization flow every time.
 * 
 * <p><small>Angular: Up and Running by Shyam Seshadri, CH02:P20 </small></p>
 */
export class StockItemComponent implements OnInit {

  // Class Member variables
  public stock: Stock;

  constructor() { }

  /**
   * When you want to hook on the initialization phase of a component, you need to
   * implement the <code>OnInit</code> interface and then implement the
   * <code>ngOnInit</code> function in the component, which is where you write your initialization logic.
   * 
   * <p><small>Angular: Up and Running by Shyam Seshadri, CH02:P20 </small></p>
   */
  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite(event){
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
