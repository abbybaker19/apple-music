import { Component } from '@angular/core';
import { mock_product_list } from './browse/mock_product_list';
import { ProductItemModel } from './browse/product-item.model';
import { category_list } from './browse/category_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apple-music';
  products: ProductItemModel [] = [];
  category_list: any = category_list;

  constructor () {
    // put some code to fethc data from backend using htp

    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }

    this.category_list = category_list;
  }
}
