import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import {TabViewModule} from 'primeng/tabview';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }

    activeIndex1: number = 0;

    activeIndex2: number = 0;
  
    scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));
}
